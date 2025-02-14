
// generates a JWT token with user ID valid for 30 days.

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    if (!id) throw new Error("User ID is required");

    return jwt.sign({ id }, process.env.JWT_SECRET, {

        expiresIn: '30d' 
    });
};

module.exports = generateToken;
