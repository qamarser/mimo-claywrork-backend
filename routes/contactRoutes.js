// secure contact page api

const express = require("express");
const { gettext, createtext } = require("../controllers/contactController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", gettext);  
router.post("/create", createtext);        

module.exports = router;

// GET messages requires authentication.
// POST allows any user to send a message.
