const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const bodyParser = _bodyParser.json();
const prisma = new PrismaClient();

router.put("/:postID", bodyParser, async (req, res) => {
  try {
    const data = req.body;
    const { postID } = req.params;
    if (data.value === "like") {
      const updated_post = await prisma.posts.update({
        where: { id: parseInt(postID) },
        data: {
          likes: { increment: 1 },
        },
      });
      res.json(updated_post);
    } else {
      const updated_post = await prisma.posts.update({
        where: { id: parseInt(postID) },
        data: {
          likes: { decrement: 1 },
        },
      });
      res.json(updated_post);
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error updating likes");
  }
});
module.exports = router;
