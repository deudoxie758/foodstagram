const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", async (req, res) => {
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

module.exports = router;
