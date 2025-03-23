const { getFilesByDate } = require("../../services/user-summary/get-files-by-date");

const calendarDateController = async (req, res, next) => {
  const { userId } = req.params;
  const {selectedDate} = req.body;
  try {
    const fileList = await getFilesByDate(userId,selectedDate);
    if (fileList.length > 0) {
      res.status(200).json({ succes: true, data: fileList });
    } else {
      res.status(400).json({success:false,message:"files are not found"});
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { calendarDateController };
