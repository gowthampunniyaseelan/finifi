const mongoose = require('mongoose');

const accessLevelSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true
    },
    accessType: {
        type: String,
        enum: ['read-only', 'read-write'],
        required: true
    }
});

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    accessLevels: [accessLevelSchema],
    isCustom: {
        type: Boolean,
        default: false
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
