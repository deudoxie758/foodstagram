const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", bodyParser, async (req, res) => {
  const data = req.body;
  const new_post = await prisma.posts.create({ data });
  res.json(new_post);
});

router.get("/", async (req, res) => {
  const all_posts = await prisma.posts.findMany();
  res.json(all_posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const get_post = await prisma.posts.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(get_post);
});

router.put("/:id", bodyParser, async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated_post = await prisma.posts.update({
    where: { id: parseInt(id) },
    data,
  });
  res.json(updated_post);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.posts.delete({
    where: { id: parseInt(id) },
  });
  res.status(200).send("Deleted Successfully");
});
module.exports = router;
