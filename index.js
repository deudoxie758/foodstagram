const express = require("express");
const router = express.Router();
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const tagsRouter = require("./routes/tags");
const commentsRouter = require("./routes/comments");

const app = express();
const port = 3000;

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);
app.uer("/comments", commentsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = router;
