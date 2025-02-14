
const express = require('express');
const connectDB = require('./config/db');// Import database connection
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");

dotenv.config();
// db connection
// connectDB('user1', 'user2');
connectDB();
// connectDB('user2'); // Commented out to avoid multiple connections at startup



const app = express();

//handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err)
});


//middlewares
app.use(express.json()) //to make sure he data from front to back is in the form of json 
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/user", require("./routes/authRoutes"));
app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, () => 
console.log(`listening on port ${port}...`));
