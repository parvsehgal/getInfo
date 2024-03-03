const express = require("express");
const router = express.Router();
const { getInfo } = require('../controllers/scraping')

router.post('/getInfo', getInfo)

module.exports = router;
