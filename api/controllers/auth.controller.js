import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  //Extract data from req body
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create user",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Check if user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user)
      return res.status(401).json({
        message: "Invalid Credentials!",
      });
    console.log("User found: ", user);

    //Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({
        message: "Invalid Password!",
      });

    // create a token using JWT
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    //
    const { password: userPassword, ...userInfo } = user;
    //Generate cookie token and send to the user
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
