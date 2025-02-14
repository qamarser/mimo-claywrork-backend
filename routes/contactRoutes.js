// secure contact page api

const express = require("express");
const { getMessages, createMessage } = require("../controllers/contactController");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getMessages);  
router.post("/", createMessage);        
module.exports = router;

// GET messages requires authentication.
// POST allows any user to send a message.