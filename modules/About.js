const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},//store img url
},{ timeseries: true});

module.exports = mongoose.model("About", aboutSchema);