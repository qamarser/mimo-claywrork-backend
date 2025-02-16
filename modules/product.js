const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String] },
  colors: { type: [String] },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }   // Reference to Category
});

module.exports = mongoose.model('Product', productSchema);
