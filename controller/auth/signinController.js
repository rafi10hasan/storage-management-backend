

const { checkUserExist } = require("../../services/auth/signin");
const generateToken = require("../../utils/generateToken");

const signInController = async (req, res, next) => {
  const credentials = req.body;

  try {
    const user = await checkUserExist(credentials);
    if (user?.id) {
      // Generate JWT token
        
      const token = generateToken(user);
      console.log(token)
      // Set token in HttpOnly cookie
      res.cookie("token", token, {
        httpOnly: true,  
        secure: process.env.NODE_ENV === "production",  
        sameSite: "None", // Change to "Lax" if frontend & backend are on the same origin
        maxAge: 3600000,  // 1 hour
      });

      // Send user data (excluding token)
      res.status(200).json({ message: "Login successfully", data: user });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = signInController;
