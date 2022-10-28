
// This is mongoDB schema for the project Task. it defined the properties of data that will be stored.

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    //Id will be UUID when we create/post data in mongodb,so i did not declared it here
    name:{
        type:String,
        require:true,
        trim:true,

    },
    age:{
        type:Number,
        require:true,
    }
},{timestamps:true}) // Timestamps is taken consideration because i want to track when the data was stred in mongodb.


const User = mongoose.model('User',userSchema)

module.exports = User