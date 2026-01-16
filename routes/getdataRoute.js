const express = require('express');

const router = express.Router()

const getUserData = require('../controller/getdataController');

router.get("/getdata", getUserData)

module.exports = router