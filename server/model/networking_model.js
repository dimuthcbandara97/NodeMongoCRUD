const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    competitor_name: String,
    gender: String,
    workouts: String,
    performance: String,
    imageurl: String,
});


const networkDB = mongoose.model('networkDB',schema)

module.exports= networkDB;