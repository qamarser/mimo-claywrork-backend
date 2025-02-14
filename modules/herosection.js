const mongoose = require("mongoose");

const hersectionSchema = new mongoose.Schema({
    imageUrl: {type: String, require:true},
})

module.exports = mongoose.model("Herosection", hersectionSchema, "hero-section")