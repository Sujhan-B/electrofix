import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized. Please log in again." });
  }

  const token = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // Attach the user ID to the request object
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default authMiddleware;