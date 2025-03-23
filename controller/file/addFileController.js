const { saveFile } = require("../../services/file/saveFile");


const addFileController = async (req, res, next) => {
 
    const {userId} = req.params;
    const file = req.file
 
  try {
    const newFile = await saveFile(userId,file);
    if (newFile._id) {
      res.status(201).json({success:true, message:"file created succesfully!"});
    } else {
      res.json({message:"file error"});
    }
  } catch (err) {
    next(err)
  }
};

module.exports = { addFileController };
