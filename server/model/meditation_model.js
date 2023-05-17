const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    meditation_name: {
        type: String,
        required: true
    },
    meditation_type: {
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
    fitness_goal: {
        type: String,
        required: true
    }
});



const meditationdb = mongoose.model('meditationdb',schema)

module.exports= meditationdb;