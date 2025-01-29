import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  // const token = req.cookies.token;

  // if (!token) {
  //   return res.status(401).json({ message: "Not Authenticated" });
  // }

  // jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
  //   if (err) {
  //     return res.status(403).json({ message: "Token is not valid" });
  //   }

  // Do something with payload
  console.log(req.userID);
  res.status(200).json({ message: "You are authenticated" });
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    if (!payload.isAdmin) {
      return res.status(403).json({ message: "You are not an admin" });
    }

    // Do something with payload
    res.status(200).json({ message: "You are authenticated" });
  });
};
