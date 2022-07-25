const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const bodyParser = _bodyParser.json();
const prisma = new PrismaClient();

router.post("/login", bodyParser, async (req, res) => {
  try {
    const { username, password } = req.body;
    const get_user = await prisma.users.findUnique({
      where: { username },
    });
    if (get_user) {
      const hash = get_user.hashed_password;
      const is_authenticated = await bcrypt.compare(password, hash);
      if (!is_authenticated) {
        res.status(401).send("Unauthorized");
      } else {
        res.json(get_user);
      }
    } else {
      res.status(401).send("Unauthorized: user not found");
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error logging in");
  }
});
module.exports = router;
