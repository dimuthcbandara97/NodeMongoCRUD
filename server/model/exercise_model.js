const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    exercise_name: String,
    exercise_type: String,
    instructor: String,
    notes: String
});


const exercisedb = mongoose.model('progressdb',schema)

module.exports= exercisedb;