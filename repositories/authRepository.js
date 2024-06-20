const User = require('../models/user');

async function findUserByEmail(email) {
    return await User.findOne({ email });
}

async function createUser(data) {
    const user = new User(data);
    return await user.save();
}

async function findById(id) {
    return await User.findById(id).select('password');
}

module.exports = {
    findUserByEmail,
    findById,
    createUser
};