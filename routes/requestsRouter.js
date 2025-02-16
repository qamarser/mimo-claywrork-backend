const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// POST route to handle form submissions
router.post("/", async (req, res) => {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Save request to MongoDB in the "requests" collection
        const newRequest = new ContactRequest({ name, phone, email, message });
        await newRequest.save();

        res.status(200).json({ message: "Message stored successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error storing message." });
    }
});

module.exports = router;
