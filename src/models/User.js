const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
});
UserSchema.set('timestamps', true);

module.exports = mongoose.model('User', UserSchema);