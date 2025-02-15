const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },             // Category name (e.g., Earrings, Keychains)
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]  // Array of product IDs
});

module.exports = mongoose.model('Category', categorySchema);
