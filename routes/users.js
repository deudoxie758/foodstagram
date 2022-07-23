const express = require("express");
const { PrismaClient, Prisma } = require("@prisma/client");
const _bodyParser = require("body-parser");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", bodyParser, async (req, res) => {
  const data = req.body;
  data.dob = new Date(data.dob);
  const new_user = await prisma.users.create({ data });
  res.send(new_user);
});

router.get("/", async (req, res) => {
  const all_users = await prisma.users.findMany();
  res.json(all_users);
});

module.exports = router;
