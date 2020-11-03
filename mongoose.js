const mongoose = require('mongoose');

const User = require('./models/user');

mongoose.connect(
    'mongodb+srv://dbuser:OOITGyDGMyyZbzEs@cluster0.riuw6.mongodb.net/Obtrax-database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to database!')
    }).catch(() => {
        console.log('Connection failed!')
    });

const createUser = async (req, res, next) => {
    const createUser = new User({
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
    });
    const result = await createUser.save();
    console.log(typeof createdUser._id);
    res.json(result);
};

const getUsers = async (req, res, next) => {
    const users = await User.find().exec();
    res.json(users);
}

exports.createUser = createUser;
exports.getUsers = getUsers;