const { createError } = require("../../errors/create-error");
const File = require("../../models/file-model");
const User = require("../../models/user-model")

async function deleteAccount(userId){
    try {
        const user = await User.findById(userId);
        if(!user){
            throw createError("user not found",404)
        }
        const deleteUser = await User.deleteOne({_id:userId});
        if(deleteUser.deletedCount <= 0){
            throw createError("the account are not deleted",400)
            
        }
        await File.deleteMany({userId})
        return deleteUser
    } catch (err) {
        if (!err.isOperational) {
            throw new Error("Unexpected error", err);
          }
          throw err;
    }
}

module.exports = {deleteAccount}