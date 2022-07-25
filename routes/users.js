const express = require("express");
const { PrismaClient } = require("@prisma/client");
const _bodyParser = require("body-parser");
const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");
const bcrypt = require("bcrypt");

const router = express.Router();
const prisma = new PrismaClient();

const bodyParser = _bodyParser.json();

router.post("/", bodyParser, async (req, res) => {
  const data = req.body;
  data.dob = new Date(data.dob);
  data.hashed_password = await bcrypt.hash(data.password, 10);
  delete data.password;
  const new_user = await prisma.users.create({ data });
  res.send(new_user);
});

router.get("/", async (req, res) => {
  const all_users = await prisma.users.findMany();
  res.json(all_users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const get_user = await prisma.users.findUnique({
      where: { id: parseInt(id) },
      include: {
        posts: true,
      },
    });
    if (!get_user) {
      res.status(404).send("User not found");
    } else {
      res.json(get_user);
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error fetching user");
  }
});

router.put("/:id", bodyParser, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated_user = await prisma.users.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(updated_user);
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error updating user");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.users.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).send("User deleted successfully");
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error deleting user");
  }
});

router.put("/follow/:id", bodyParser, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (data.follow) {
      const updated_follows = await prisma.users.update({
        where: { id: parseInt(id) },
        data: {
          followers: {
            push: data.follower_id,
          },
        },
      });
      res.json(updated_follows);
    } else if (!data.follow) {
      let get_user = await prisma.users.findUnique({
        where: { id: parseInt(id) },
      });
      let followers_list = get_user.followers.filter(
        (id) => id !== data.follower_id
      );
      console.log(followers_list);
      const updated_follows = await prisma.users.update({
        where: { id: parseInt(id) },
        data: {
          followers: followers_list,
        },
      });
      res.json(updated_follows);
    }
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
    res.status(400).send("Error updating followers");
  }
});

module.exports = router;
