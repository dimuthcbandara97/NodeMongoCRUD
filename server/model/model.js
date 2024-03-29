const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
});


const Userdb = mongoose.model('uderdb',schema)

module.exports= Userdb;


// implement the get user method and login method

