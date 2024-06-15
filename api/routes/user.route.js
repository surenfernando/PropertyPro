import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  console.log("register works!");
});

router.get("/login", (req, res) => {
  console.log("login works!");
});

router.get("/logout", (req, res) => {
  console.log("logout works!");
});

export default router;
