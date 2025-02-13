const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Automatically generate unique ID
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    colors: [{ type: String }] // Array of available colors
});

const CategorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true, unique: true },
    products: [ProductSchema] // Array of products within a category
});

module.exports = mongoose.model('Category', CategorySchema);

