const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    timer_name: String,
    time_period: {
        type: Number,
        get: function(v) {
            return parseFloat(v).toFixed(2);
        },
        set: function(v) {
            return parseFloat(v).toFixed(2);
        }
    },
    future_date: {
        type: Date,
        required: true
    }
});

const timerdb = mongoose.model('timerdb',schema)

module.exports= timerdb;