
const express = require('express');
const connectDB = require('./config/db');// Import database connection
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();
const cors = require('cors');

// db connection
connectDB();

//middlewares
app.use(express.json()) //to make sure he data from front to back is in the form of json 
app.use(cors());

app.use("/api/auth", authRoutes);
app.use('/api/products', require('./routes/productRoutes'));

const port = process.env.PORT || 3000;
app.listen(port, () => 
console.log(`listening on port ${port}...`))
