const express = require('express');
const { registerController } = require('../controller/auth/registerController');
const signInController = require('../controller/auth/signinController');
const { verifyEmailController } = require('../controller/auth/verifyEmailController');
const { verifyOTPController } = require('../controller/auth/verifyOtpController');
const { resetPasswordController } = require('../controller/auth/resetPasswordController');
const isAuthenticate = require('../middlewares/isAuthenticate');



const router = express.Router()

router.post('/signup',registerController);
router.post('/signin',signInController);
router.post('/send-otp',verifyEmailController);
router.get('/verify-otp/:id',verifyOTPController);
router.put('/reset-password/:id',resetPasswordController);

module.exports = router