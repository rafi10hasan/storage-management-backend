const express = require('express');
const { summaryController } = require('../controller/summary/summaryController');
const { recentFilesController } = require('../controller/summary/recentFilesController');
const { calendarDateController } = require('../controller/summary/calendarDateController');

const router = express.Router();

router.get("/summary/:userId",summaryController)
router.get("/recent-files/:userId",recentFilesController)
router.get("/calendar/files/:userId",calendarDateController)
module.exports = router