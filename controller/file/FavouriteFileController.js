
const { addOrRemoveFavouriteFile } = require("../../services/file/add-or-remove-favourite");
const { getFavouritesFile } = require("../../services/file/get-favourites-file");



const addOrRemoveFavouriteController = async (req, res, next) => {
  const { fileId } = req.params;
  const {isFavourite} = req.body;
  try {
    const favourite = await addOrRemoveFavouriteFile(fileId,isFavourite);

    if (favourite._id) {
        
        if(isFavourite){
            res.status(200).json({success:"true", message: "file has been added in Favourite succesfully!" });
        }
       else{
        res.status(200).json({success:"true", message: "file has been removed in Favourite succesfully!" });
       }
    } else {
      res.status(400).json({ message: "file error" });
    }
  } catch (err) {
    next(err);
  }
};


const favouriteListController = async (req, res, next) => {
    const {userId} = req.params
    try {
        const favourites = await getFavouritesFile(userId);
       
        if (favourites.length > 0) {
          res.status(200).json({
            success: true,
            message: "Favorite items retrieved successfully",
            data: favourites
        });
        } else {
          res.status(404).json({ message: "favourites items are not found" });
        }
      } catch (err) {
        next(err);
      }
}

module.exports = { addOrRemoveFavouriteController,favouriteListController,  };
