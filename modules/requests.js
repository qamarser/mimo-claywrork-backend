const mongoose = require("mongoose");

const contactRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Request", contactRequestSchema, "requests");
