const { createUser } = require("../../services/auth/create-account");


const registerController = async (req, res,next) => {
  const userInfo = req.body;
  console.log(userInfo)
  try {
    const user = await createUser(userInfo);
    if (user._id) {
      res.status(201).json({success:true,message:"user has been created succesfully."});
    } else {
      res.json("user already exist");
    }
  } catch (err) {
    next(err)
  }
};

module.exports = { registerController };
