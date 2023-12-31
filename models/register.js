const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique: true
    }, 
    phone: {
        type:Number,
        required:true,
    }, 
    password: {
        type:String,
        required:true,
    },
    confirmpassword: {
        type:String,
        required:true,
    } 

})

//we need to create a collection
const User= new mongoose.model("User", userSchema);

module.exports= User;