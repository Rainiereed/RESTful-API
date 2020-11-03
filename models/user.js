const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    personal_number: {type: String, required: true},
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    due_date: { type: Date, required: true },
    pregnancy_number: { type: Number, required: true },
    preterm_kids_number: { type: Number, required: true },
    hospital_preference: { type: String, required: true },
    midwife_phone_number: { type: String, required: true },
    partner_phone_number: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
