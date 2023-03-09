const mongoose = require('mongoose');

// var schema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     // required:true
    // },
    // email:{
    //     type:String,
    //     // required:true,
    //     // unique:true
    // },
//     name: String,
//     email: String,
//     gender: String,
//     status: String
// });

// const Userdb = mongoose.model('uderdb',schema)

// module.exports= Userdb;

// user data

var schema = new mongoose.Schema({
    competitor_name: String,
    gender: String,
    workouts: String,
    performance: String
});


const networkDB = mongoose.model('networkDB',schema)

module.exports= networkDB;