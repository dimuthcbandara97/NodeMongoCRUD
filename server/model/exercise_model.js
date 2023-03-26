const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    exercise_name: String,
    exercise_type: String,
    instructor: String,
    notes: String,
    imageurl: String,
    videourl: String
});


const exercisedb = mongoose.model('exercisedb',schema)

module.exports= exercisedb;

