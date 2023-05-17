const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    food_name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    recomended_by: {
        type: String,
        required: true
    },
    why_recomended: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    videourl: {
        type: String,
        required: true
    },
    fitness_goal: {
        type: String,
        required: true
    }
});



const foodDB = mongoose.model('foodDB',schema)

module.exports= foodDB;