import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(express.json());

//Post Router Connected
app.use("/api/posts", postRoute);

//Auth Router Connected
app.use("/api/auth", authRoute);

//User Router Connected
app.use("/api/user", userRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
