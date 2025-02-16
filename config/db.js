const mongoose = require("mongoose");
require("dotenv").config();

// Global connection variable
let connection = null;

// Function to connect to the database
const connectDB = async () => {
    try {
        // Check if connection already exists
        if (connection && mongoose.connection.readyState === 1) {
            console.log("Using existing database connection");
            return connection;
        }

        // Create new connection if none exists
        connection = await mongoose.connect(process.env.MONGODB_URI,);
        console.log("Connected to database successfully");
        return connection;
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

    // try {
    //         uri = process.env.MONGODB_URI; // Connection string for user 2

    //     // Check if already connected
    //     // if (!connections[userType] || mongoose.connection.readyState === 0) {
    //         const connections = await mongoose.connect(uri);
    //     // }

    //     console.log(`Connected to db successfully for`);
    // } catch (error) {
    //     console.log(`Error connecting to db ${error}`);
    //     console.log(error);
    // }



// try{
//     mongoose.connect(process.env.MONGODB_URI);
//     console.log("connected to db successfully")
// }catch(error){
//     console.log("error connecting to db");
//     console.log(error);
// }
