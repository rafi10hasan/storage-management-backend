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

const router = express.Router();

router.post("/add/:userId", upload.single("file"), addFileController);
router.post("/copy/:fileId", copyFileController);
router.post("/duplicate/:fileId", duplicateFileController);
router.put("/rename/:fileId", renameFileController);
router.delete("/delete/:fileId", deleteFileController);
router.put("/favourite/:fileId", addOrRemoveFavouriteController);
router.get("/favourites/:userId", favouriteListController);
router.get("/list/:userId", fileListController);
router.post("/private-file/:userId", privateFileController);

module.exports = router;
