const mongoose = require("mongoose");
require("dotenv").config();

// Store active connections
const connections = {};

// Function to connect to the database based on user type
const connectDB = async () => {
    try {
            uri = process.env.MONGODB_URI; // Connection string for user 2

        // Check if already connected
        // if (!connections[userType] || mongoose.connection.readyState === 0) {
            const connections = await mongoose.connect(uri);
        // }

        console.log(`Connected to db successfully for`);
    } catch (error) {
        console.log(`Error connecting to db ${error}`);
        console.log(error);
    }
}

module.exports = connectDB;

// try{
//     mongoose.connect(process.env.MONGODB_URI);
//     console.log("connected to db successfully")
// }catch(error){
//     console.log("error connecting to db");
//     console.log(error);
// }