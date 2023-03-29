const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    bloodpressure: String,
    heartrate: String,  
    bmi: String,
    bodyfat: String,
});


const statsdb = mongoose.model('statsdb',schema)

module.exports= statsdb;

