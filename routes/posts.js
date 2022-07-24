const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", bodyParser, async (req, res) => {
  const data = req.body;
  try {
    const new_post = await prisma.posts.create({ data });
    res.json(new_post);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error creating post");
  }
});

router.get("/", async (req, res) => {
  try {
    const all_posts = await prisma.posts.findMany();
    res.json(all_posts);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error fetching posts");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const get_post = await prisma.posts.findUnique({
      where: { id: parseInt(id) },
    });
    if (!get_post) {
      res.status(404).send("Post not found!");
    } else {
      res.json(get_post);
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error fetching post");
  }
});

router.put("/:id", bodyParser, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated_post = await prisma.posts.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(updated_post);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error updating post");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.posts.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error deleting post");
  }
});
module.exports = router;
