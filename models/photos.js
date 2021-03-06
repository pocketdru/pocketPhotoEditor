const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;