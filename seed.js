const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Category = require('./models/Category');


require('dotenv').config();
connectDB();

const seedData = async () => {
    await Category.deleteMany(); // Clear old data

    const categories = [
        {
            name: "Earrings",
            products: [
                { name: "Blue Star Earrings", price: 3, imageUrl: "https://example.com/blue-star.jpg" },
                { name: "Flower Earrings", price: 4.5, imageUrl: "https://example.com/flower.jpg" }
            ]
        },
        {
            name: "Keychains",
            products: [
                { name: "Puzzle Keychain", price: 2.5, imageUrl: "https://example.com/puzzle.jpg" },
                { name: "Pizza Keychain", price: 3, imageUrl: "https://example.com/pizza.jpg" }
            ]
        }
    ];

    await Category.insertMany(categories);
    console.log("Database Seeded!");
    process.exit();
};

seedData();
