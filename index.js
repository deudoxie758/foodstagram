const express = require("express");
const router = express.Router();
const usersRouter = require("./routes/users");

const app = express();
const port = 3000;

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = router;
