const mongoose = require("mongoose");
require("dotenv").config();

// used to connect data base

 const connectDB = async () => {
      try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to db successfully")
    }catch(error){
        console.log("error connecting to db");
        console.log(error);
    }
    
}

module.exports = connectDB;