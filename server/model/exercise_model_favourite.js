const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    user_name: String,
    exercise_name: String,
    exercise_type: String,
    instructor: String,
    notes: String,
    imageurl: String,
    videourl: String,
    affecting_area: String,
});


const exercisefavouritedb = mongoose.model('favourite_exercise',schema)

module.exports= exercisefavouritedb;

