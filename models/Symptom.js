const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
    userID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true 
    },
    contractions_records: { type: Number },
    time_since_last_contraction: { type: Date },
    time_between_last_2_contractions: { type: Date },
    time_for_last_3_contractions: { type: Date },
    waterbroken: { type: Boolean },
    watercolor: { type: String },
    pain_intensity: { type: Number },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
      },   
    
});

module.exports = mongoose.model('Symptom', symptomSchema);
