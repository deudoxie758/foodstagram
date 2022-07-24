const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", bodyParser, async (req, res) => {
  try {
    const data = req.body;
    const new_tag = await prisma.tags.create({ data });
    res.json(new_tag);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error creating tag");
  }
});

router.get("/:postID", async (req, res) => {
  try {
    const { postID } = req.params;
    const get_tags = await prisma.tags.findMany({
      where: { post_id: parseInt(postID) },
    });
    res.json(get_tags);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error fetching tag");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.tags.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send("Tag deleted successfully");
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error deleting tag");
  }
});

module.exports = router;
