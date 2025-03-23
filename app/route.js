const router = require('express').Router();

router.get("/", (_req, res) => {
    res.send("Welcome to --storagement management-- API server");
  });

module.exports = router