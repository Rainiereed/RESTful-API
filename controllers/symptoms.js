const mongoose = require('mongoose');

const Symptom = require('../models/Symptom');

const controller = {};

controller.createSymptom = async (req, res) => {
    try {
        const newSymptom = new Symptom({
            userID: req.body.userID,
            contractions_records: req.body.contractions_records,
            time_since_last_contraction: req.body.time_since_last_contraction,
            time_between_last_2_contractions: req.body.time_between_last_2_contractions,
            time_for_last_3_contractions: req.body.time_for_last_3_contractions,
            waterbroken: req.body.waterbroken,
            watercolor: req.body.watercolor,
            pain_intensity: req.body.pain_intensity,

        }, (error) => {
            console.log(error);
        });

        const result = await newSymptom.save();
        res.json(result);
        console.log(newSymptom);
        res.send({ message: "Success", data: newSymptom });
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });
    }
};

controller.getAll = async (req, res) => {
    try {
        const symptoms = await Symptom.find().exec();
        res.json(symptoms);
        return res.send(symptoms);
    }
    catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });
    }
};

// Get a specific symptom
controller.getSpecific = async (req, res) => {
    try {
        const symptom = await Symptom.findById({ _id: req.params._id });
        // console.log(symptom);

        return res.send(symptom._doc);
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });

    }
};


module.exports = controller;
