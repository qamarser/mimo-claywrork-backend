const express = require('express');
const router = express.Router();
const { getProductsByCategory, getProductById } = require('../controllers/productController');

// productRoutes.js
router.get('/category/:idcategory', getProductsByCategory);
router.get('/:id', getProductById);


module.exports = router;
