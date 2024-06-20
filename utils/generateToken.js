const jwt = require('jsonwebtoken');

const generateToken = (id,roleId) => {
    return jwt.sign({ id , roleId}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;

