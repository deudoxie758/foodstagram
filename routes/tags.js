const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

module.exports = router;
