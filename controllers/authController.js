const authService = require('../services/authService');

exports.registerUser = async (req, res) => {
    try {
        const userData = await authService.registerUser(req.body);
        res.status(201).json(userData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.authUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await authService.authenticateUser(email, password);
        res.json(userData);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};
