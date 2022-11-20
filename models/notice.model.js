const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    rooms: { type: Number, required: true },
    meters: { type: Number, required: true },
    photo: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: String, required: true },
});

module.exports = mongoose.model('Notice', noticeSchema);