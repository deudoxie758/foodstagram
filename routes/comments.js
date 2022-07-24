const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyparser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const bodyParser = _bodyparser.json();
const router = express.Router();
const prisma = new PrismaClient();

module.exports = router;
