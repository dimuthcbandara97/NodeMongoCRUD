const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    fitness_goal: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});


const UserDetailDb = mongoose.model('userdetail',schema)

module.exports= UserDetailDb;


// implement the get user method and login method

