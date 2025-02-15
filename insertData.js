const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Category = require('./modules/category');
const Product = require('./modules/product');

connectDB();

const insertData = async () => {
    try {
        const category = new Category({ name: "Earrings" });
        await category.save();

        const product = new Product({
            name: "Floral Earrings",
            price: 15,
            colors: ["red", "blue"],
            category: category._id
        });
        await product.save();

        console.log("✅ Data inserted successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        process.exit(1);
    }
};

insertData();
