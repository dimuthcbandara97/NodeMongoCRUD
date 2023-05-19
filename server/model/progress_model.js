const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    progress_name: String,
    daily_count: {
        type: Number,
        get: function(v) {
            return parseFloat(v).toFixed(2);
        },
        set: function(v) {
            return parseFloat(v).toFixed(2);
        }
    },
    date: {
        type: Date,
        required: true
    },
    month: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v >= 1 && v <= 12;
            },
            message: 'Month should be between 1 and 12'
        }
    },
    email: {
        type: String,
        required: true
    }
});


const timerdb = mongoose.model('progressdb',schema)

module.exports= timerdb;
