const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// register user
const register = async (req, res) => {
    console.log(req.body);
    
     const { name, email, password } = req.body;  //extract data
     // Check if any of the required fields are missing
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide name, email, and password" });
    }
     try {
            const userExists = await User.findOne({ email });

            if (userExists)
                return res.status(400).json({ message: "User already exists" });

            // generate random string to enhance security anf hashing password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // create a new user
            const user = await User.create({ name, email, password: hashedPassword });
            
            if (!user || !user._id) {
                return res.status(500).json({ message: "Failed to create user" });
            }

            res.status(201).json({
                message: "User created successfully",
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),

         });
        } catch (error) {
            res.status(500).json({ message: "Server error" + error });
        }
};


// login user
const login = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid && user._id) {

            res.json({
                _id: user._id,
             name:user.name,
             email:user.email,
            token: generateToken(user._id),
            });
        }else{
            res.status(401).json({message:"Invalid emial or password"});
        }
        } catch (error) {
            console.error("Server error:", error);
            res.status(500).json({ message: "Server error: " + error.message });

    }

    //     if (!user) return res.status(400).json({ message: "Invalid email or password" });

    //     const isValidPassword = await bcrypt.compare(password, user.password);
    //     if (!isValidPassword) return res.status(400).json({ message: "Invalid email or password" });

    //     const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    //     res.json({ message: "Logged in successfully", token, user: { id: user._id, name: user.name, email: user.email } });
    // } catch (error) {
    //     res.status(500).json({ message: "server error" + error });
    // }
};

module.exports = { register, login };


// Register encrypts passwords before saving to the database.
// Login verifies passwords and returns a JWT token.
