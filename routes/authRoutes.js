const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateMiddleware = require('../middleware/validateMiddleware');

router.post('/register', validateMiddleware, authController.registerUser);
router.post('/login', authController.authUser);

module.exports = router;

