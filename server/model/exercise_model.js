const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    exercise_name: {
        type: String,
        required: true
    },
    exercise_type: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    notes: {
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
    affecting_area: {
        type: String,
        required: true
    },
    bmi_range: {
        type: String,
        required: true
    },
    rep_count: {
        type: Number,
        required: true
    },
    exercise_time: {
        type: Number,
        required: true
    },
    fitness_goal: {
        type: String,
        required: true
    },
});




const exercisedb = mongoose.model('exercisedb',schema)

module.exports= exercisedb;

