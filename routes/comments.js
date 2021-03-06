const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyparser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const bodyParser = _bodyparser.json();
const router = express.Router();
const prisma = new PrismaClient();

router.post("/", bodyParser, async (req, res) => {
  try {
    const data = req.body;
    if (!data.content) {
      res.status(400).send("Content cannot be empty");
    } else {
      const new_comment = await prisma.comments.create({
        data,
      });
      res.json(new_comment);
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error creating comment");
  }
});

router.get("/:postID", async (req, res) => {
  try {
    const { postID } = req.params;
    const get_comments = await prisma.comments.findMany({
      where: { post_id: parseInt(postID) },
    });
    res.json(get_comments);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error fetching comments");
  }
});

router.put("/:id", bodyParser, async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const updated_comment = await prisma.comments.update({
      where: { id: parseInt(id) },
      data: {
        content: data.content,
      },
    });
    res.json(updated_comment);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error updating comment");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.comments.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send("successfully deleted comment");
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error deleting comment");
  }
});
module.exports = router;
