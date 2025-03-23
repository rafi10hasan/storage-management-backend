const express = require('express');
const { changePasswordController } = require('../controller/profile/changePasswordController');
const { deleteAccountController } = require('../controller/profile/deleteAccountController');

const router = express.Router();

router.put('/change-password/:userId',changePasswordController);
router.delete('/delete-account/:userId',deleteAccountController);
module.exports = router