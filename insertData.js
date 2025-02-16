const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Category = require('./modules/Category');
const Product = require('./modules/product');

// Connect to DB before running the script
const insertData = async () => {
    try {
        // Wait for the DB connection to be established before continuing
        await connectDB();

        // Drop collections using the models
        await Product.deleteMany({});
        await Category.deleteMany({});
        
        const earrings = await Category.create({ name: 'Earrings' });
        const keychains = await Category.create({ name: 'Keychains' });
        const coasters = await Category.create({ name: 'Coasters' });
        const vases = await Category.create({ name: 'Vases' });
        const Decoration = await Category.create({ name: 'Decoration' });

        const earringsProducts = await Product.insertMany([
          { name: 'Sunset Hoops', price: 20, images: [], colors: ['Orange', 'Yellow'], category: earrings._id },
          { name: 'Marble Drops', price: 25, images: [], colors: ['White', 'Gray'], category: earrings._id },
          { name: 'Floral Studs', price: 15, images: [], colors: ['Pink', 'Green'], category: earrings._id },
          { name: 'Abstract Swirls', price: 18, images: [], colors: ['Purple', 'Blue'], category: earrings._id }
        ]);

        const keychainsProducts = await Product.insertMany([
          { name: 'Galaxy Keychain', price: 10, images: [], colors: ['Black', 'Purple'], category: keychains._id },
          { name: 'Mini Donut Keychain', price: 8, images: [], colors: ['Brown', 'Pink'], category: keychains._id },
          { name: 'Name Tag Keychain', price: 12, images: [], colors: ['Blue', 'White'], category: keychains._id },
          { name: 'Leafy Charm', price: 9, images: [], colors: ['Green', 'Yellow'], category: keychains._id }
        ]);

        const coastersProducts = await Product.insertMany([
          { name: 'Marble Coaster', price: 30, images: [], colors: ['White', 'Gray'], category: coasters._id },
          { name: 'Leaf Imprint Coaster', price: 28, images: [], colors: ['Green', 'Brown'], category: coasters._id },
          { name: 'Ocean Waves Coaster', price: 32, images: [], colors: ['Blue', 'White'], category: coasters._id },
          { name: 'Pastel Hexagon Coaster', price: 25, images: [], colors: ['Purple', 'Pink'], category: coasters._id }
        ]);

        const vasesProducts = await Product.insertMany([
          { name: 'Mini Bud Vase', price: 40, images: [], colors: ['White', 'Green'], category: vases._id },
          { name: 'Abstract Clay Vase', price: 50, images: [], colors: ['Purple', 'Yellow'], category: vases._id },
          { name: 'Speckled Vase', price: 45, images: [], colors: ['Gray', 'White'], category: vases._id },
          { name: 'Rustic Textured Vase', price: 55, images: [], colors: ['Brown', 'Beige'], category: vases._id }
        ]);

        const decorationProducts = await Product.insertMany([
            { name: 'Clay Wall Hanging', price: 35, images: [], colors: ['Beige', 'Brown'], category: Decoration._id },
            { name: 'Geometric Clay Art', price: 45, images: [], colors: ['White', 'Gold'], category: Decoration._id },
            { name: 'Floral Clay Frame', price: 40, images: [], colors: ['Pink', 'Green'], category: Decoration._id },
            { name: 'Pastel Clay Figurines', price: 30, images: [], colors: ['Purple', 'Yellow'], category: Decoration._id }
        ]);

        await Category.findByIdAndUpdate(earrings._id, { products: earringsProducts.map(p => p._id) });
        await Category.findByIdAndUpdate(keychains._id, { products: keychainsProducts.map(p => p._id) });
        await Category.findByIdAndUpdate(coasters._id, { products: coastersProducts.map(p => p._id) });
        await Category.findByIdAndUpdate(vases._id, { products: vasesProducts.map(p => p._id) });
        await Category.findByIdAndUpdate(Decoration._id, { products: decorationProducts.map(p => p._id) });

        console.log("✅ Data inserted successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        process.exit(1);
    }
};

// Start the data insertion process
insertData();
