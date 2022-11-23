const mongoose = require('mongoose')

const Data = new mongoose.Schema({
    // userId: {
    //     type: String,
    //  },
     title: {
        type: String
     },
     content: {
        type: String,
        required: true,
     },
     dateTime: String
})

module.exports = mongoose.model("Data", Data)