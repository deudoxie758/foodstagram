const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const bodyParser = _bodyParser.json();
const prisma = new PrismaClient();

router.post("/login", bodyParser, async (req, res) => {});
module.exports = router;
