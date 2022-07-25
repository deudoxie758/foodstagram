const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyparser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const bodyParser = _bodyparser.json();
const prisma = new PrismaClient();

module.exports = router;
