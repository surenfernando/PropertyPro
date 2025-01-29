// Engine imports
import express from "express";
import cors from "cors"; // Cross-Origin Resource Sharing (CORS) is a security feature that restricts what resources a web page can request from another origin (domain).
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

// Router imports
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import testRoute from "./routes/test.route.js";

// Inits
dotenv.config();
const app = express();

//
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
// What it does: This line tells your Express app to use a "middleware" that can automatically handle incoming data sent in JSON format.
// Why it's useful: When you build a web app, the client (like a browser or another app) can send data to your server in JSON format, which is a common way to structure data. For example:

app.use(cookieParser());
// What it does: This line tells your Express app to use a middleware that makes it easier to work with cookies.
// What are cookies?: Cookies are small pieces of data that a web server can store on a user's browser. For example:
// Saving a user’s login session.
// Tracking preferences or activity.

//Post Router Connected
app.use("/api/posts", postRoute);

//Auth Router Connected
app.use("/api/auth", authRoute);

//User Router Connected
app.use("/api/user", userRoute);

app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
