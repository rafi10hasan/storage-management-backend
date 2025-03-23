const User = require("../models/user-model");
const { verifyToken } = require("../utils/verifyToken");

const isAuthenticate = async (req, res, next) => {
    const token = req.cookies.token;
   console.log('token from',token)
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "unauthorized" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.clearCookie("token");
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = isAuthenticate;
