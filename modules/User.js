const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String , require:true},
    email: {type: String , require:true, unique:true},
    phonenumber: Number ,
    passowrd: {type: String , require:true},
},
    {timestamps: true}
);

const UserModule = mongoose.model("User", UserSchema)

module.exports = UserModule ;
