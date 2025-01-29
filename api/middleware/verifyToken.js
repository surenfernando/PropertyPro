import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  // Extract Token
  const token = req.cookies.token;

  // If no token, send not authenticated message
  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  // Verify the token, if its present, and move to the next controller
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.userID = payload.id;
    next();
  });
};
