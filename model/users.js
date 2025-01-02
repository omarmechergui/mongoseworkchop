const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:String,
    email: {type:String, required:true},
    age:Number,
    adress:String,
    phone:Number,

})

module.exports = mongoose.model("users",userschema)