const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const allRoles = require("../enum/allRoles")
const accessLevelMiddleware = require("../middleware/accessLevelMiddleware")

router.get('/', authMiddleware([allRoles.ADMIN]), accessLevelMiddleware([allRoles.ADMIN]), roleController.getRole);
router.post('/', authMiddleware([allRoles.ADMIN]), accessLevelMiddleware([allRoles.ADMIN]), roleController.createRole);
router.put('/', authMiddleware([allRoles.ADMIN]), accessLevelMiddleware([allRoles.ADMIN]), roleController.updateRole);
router.delete('/:id',  authMiddleware([allRoles.ADMIN]), accessLevelMiddleware([allRoles.ADMIN]), roleController.deleteRole);

module.exports = router;

