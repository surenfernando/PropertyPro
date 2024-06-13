import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("Hello world");
});

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
