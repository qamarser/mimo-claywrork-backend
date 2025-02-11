
// generates a JWT token with user ID valid for 30 days.

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: '30d' 
    });
};

module.exports = generateToken;

