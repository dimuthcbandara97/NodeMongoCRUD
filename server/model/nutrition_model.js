const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    food_name: String,
    value: String,
    recomended_by: String,
    why_recomended: String,
    imageurl: String,
    videourl: String
});


const foodDB = mongoose.model('foodDB',schema)

module.exports= foodDB;