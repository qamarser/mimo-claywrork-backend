// secure contact page api

const express = require("express");
const { getMessages, createMessage } = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getMessages);  // Only logged-in users can see messages
router.post("/", createMessage);        // Anyone can submit a message

module.exports = router;

// GET messages requires authentication.
// POST allows any user to send a message.