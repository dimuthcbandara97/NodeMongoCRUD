const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    day: String,
    
});

const progressdb = mongoose.model('progressdb',schema)

module.exports= progressdb;


// implement the get user method and login method

