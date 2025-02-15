const Product = require('../modules/product');

// Get all products by category
exports.getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ categoryId: req.params.categoryId });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single product details
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
