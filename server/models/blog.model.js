const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    timestamps: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
