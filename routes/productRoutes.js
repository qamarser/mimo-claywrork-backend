const express = require('express');
const router = express.Router();
const { getProductsByCategory, getProductById } = require('../controllers/productController');

router.get('/category/:categoryId', getProductsByCategory);
router.get('/:id', getProductById);

module.exports = router;
