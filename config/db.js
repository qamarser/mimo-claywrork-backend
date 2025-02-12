const mongoose = require("mongoose");
require("dotenv").config();

// Store active connections
const connections = {};

// Function to connect to the database based on user type
const connectDB = async (userType) => {
    try {
        let uri;
        if (userType === 'user1') {
            uri = process.env.MONGODB_URI; // Connection string for user 1
        } else if (userType === 'user2') {
            uri = process.env.MONGODB_URI_q; // Connection string for user 2
        } else {
            throw new Error("Invalid user type");
        }

        // Check if already connected
        if (!connections[userType] || mongoose.connection.readyState === 0) {
            connections[userType] = await mongoose.connect(uri);
        }

        console.log(`Connected to db successfully for ${userType}`);
    } catch (error) {
        console.log(`Error connecting to db ${error}`);
        console.log(error);
    }
}

module.exports = connectDB;
