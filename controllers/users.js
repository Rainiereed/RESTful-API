const mongoose = require('mongoose');

const User = require('../models/User');

const controller = {};

controller.createUser = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            personal_number: req.body.personal_number,
            phone_number: req.body.phone_number,
            email: req.body.email,
            due_date: req.body.due_date,
            pregnancy_number: req.body.pregnancy_number,
            preterm_kids_number: req.body.preterm_kids_number,
            hospital_preference: req.body.hospital_preference,
            midwife_phone_number: req.body.midwife_phone_number,
            partner_phone_number: req.body.partner_phone_number,
        }, (error) => {
            console.log(error);
        });

        const result = await newUser.save();
        console.log(typeof createdUser._id);
        res.json(result);
        console.log(newUser);
        res.send({ message: "Success", data: newUser });
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });
    }
};

controller.edit = async (req, res) => {

    try {
        const editUser = await User.replaceOne(
            {
                _id: req.params._id,
            },
            {
                ...req.body, // spread syntax
                updatedAt: Date.now(),
            }
        );

        return res.send(editUser);
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });
    }
};

// Get all users
controller.getAll = async (req, res) => {
    try {
        const users = await User.find({}).exec();
        res.json(users);
        return res.send(users);
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });
    }
}

// Get a specific user
controller.getSpecific = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params._id });
        // console.log(user);

        return res.send(user._doc);
    } catch (error) {
        return res
            .status(500)
            .send({ message: "An error has occurred", error: error });

    }
};

module.exports = controller;
