const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text1: {type: String, required: true},
    text2: {type: String,},
    text3: {type: String,},
});


module.exports = mongoose.model('Contact', contactSchema, "contact");