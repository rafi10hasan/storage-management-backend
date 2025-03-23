const express = require("express");
const upload = require("../lib/file-upload/upload");
const { addFileController } = require("../controller/file/addFileController");
const { renameFileController } = require("../controller/file/renameFileController");
const { deleteFileController } = require("../controller/file/deleteFileController");
const { copyFileController } = require("../controller/file/copyFileController");
const { duplicateFileController } = require("../controller/file/duplicateFileController");
const {
  favouriteListController,
  addOrRemoveFavouriteController,
} = require("../controller/file/FavouriteFileController");
const { fileListController } = require("../controller/file/FileListController");
const { privateFileController } = require("../controller/file/privateFileController");
const { addFolderController } = require("../controller/file/addFolderController");


const router = express.Router();

router.post("/create-file/:userId", upload.single("file"), addFileController);
router.post('/create-folder/:userId',addFolderController);
router.post("/copy-file/:fileId", copyFileController);
router.post("/duplicate-file/:fileId", duplicateFileController);
router.put("/rename-file/:fileId", renameFileController);
router.delete("/delete-file/:fileId", deleteFileController);
router.put("/add-or-remove-favourite/:fileId", addOrRemoveFavouriteController);
router.get("/favourites/:userId", favouriteListController);
router.get("/filelist/:userId", fileListController);
router.post("/private-file/:userId", privateFileController);

module.exports = router;
