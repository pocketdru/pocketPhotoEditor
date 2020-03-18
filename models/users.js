const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

const User = mongoose.model("User", UserSchema);

module.exports = User;