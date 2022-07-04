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

router.get("/", (req, res) => {
  res.send("users");
});

module.exports = router;
