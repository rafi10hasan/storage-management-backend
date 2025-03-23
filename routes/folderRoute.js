const express = require('express');
const { addFolderController } = require('../controller/file/addFolderController');
const router = express.Router()

router.post('/create/:userId',addFolderController);
module.exports = router