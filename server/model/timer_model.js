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
    timer_name: String,
    time_period: String,
});


const timerdb = mongoose.model('timerdb',schema)

module.exports= timerdb;