const mongoose = require('mongoose');
const config =async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("Connected to MongoDB")
    } catch{
        console.error("Failed to connect to MongoDB")

    }
}
 
module.exports = config;