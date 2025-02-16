const jwt = require("jsonwebtoken");
const User = require ("../modules/User");

const protect = async (req, res, next) =>{
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-passowrd");
            next();
            } catch (error) {
                res.status(401).json({msg: "Not authorized, token failed : invalid token"});
            }
        }else {
            res.status(401).json({ message: "No token, authorization denied" });
        }
    };


module.exports = { protect};


//This middleware protects routes, ensuring only logged-in users can access them.