const express = require('express');
const {getImage, updateImage} = require("../controllers/herosectionController");


const router = express.Router();

router.get("/", getImage);
router.put("/update", updateImage);

module.exports = router;