const Role = require('../models/role');

async function findRoleById(id) {
    return await Role.findOne({ _id:id });
}

async function createCustomRole(name, accessLevels) {
    const role = new Role({
        name,
        accessLevels,
        isCustom: true
    });
    return await role.save();
}

async function createRole(roleData) {
  const role = new Role(roleData);
  return await role.save();
}

async function findRoleByName(name) {
  return await Role.findOne({ name });
}

async function updateRole(id, updates) {
  return await Role.findByIdAndUpdate(id, updates, { new: true });
}

async function deleteRoleById(id) {
  return await Role.findByIdAndDelete(id);
}

async function getRole() {
  return await Role.find();
}

module.exports = {
    findRoleById,
    findRoleByName,
    createRole,
    createCustomRole,
    updateRole,
    deleteRoleById,
    getRole
};
