const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true },
    foto: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    author: { type: String, required: true }
});

module.exports = mongoose.model('Notice', noticeSchema);