const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    meditation_name: String,
    meditation_type: String,
    instructor: String,
    notes: String,
    imageurl: String,
});


const meditationdb = mongoose.model('meditationdb',schema)

module.exports= meditationdb;