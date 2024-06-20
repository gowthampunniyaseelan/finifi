const authRepository = require('../repositories/authRepository');
const roleRepository = require('../repositories/roleRepository');
const generateToken = require('../utils/generateToken');

async function registerUser(data) {
    try {
        const existingUser = await authRepository.findUserByEmail(data.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const role = await roleRepository.findRoleById(data.role);
        if (!role) {
            throw new Error('Role not found');
        }

        const newUser = await authRepository.createUser(data);

        return {
            _id: newUser._id,
            email: newUser.email,
            token: generateToken(newUser._id,newUser.role)
        };
    } catch (err) {
        throw new Error(err.message);
    }
}

async function authenticateUser(email, password) {
    try {
        const user = await authRepository.findUserByEmail(email);

        if (user && await user.matchPassword(password)) {
            return {
                _id: user._id,
                email: user.email,
                token: generateToken(user._id,user.role)
            };
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    registerUser,
    authenticateUser
};