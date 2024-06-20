const roleRepository = require("../repositories/roleRepository");

async function createRole(name, accessLevels) {
  try {
    const existingRole = await roleRepository.findRoleByName(name);
    if (existingRole) {
      throw new Error("Role already exists");
    }

    const newRole = await roleRepository.createCustomRole(name, accessLevels);

    return newRole;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function updateRole(name, accessLevels) {
  try {
    const existingRole = await roleRepository.findRoleByName(name);

    if (!existingRole) {
      throw new Error(`Role with name ${name} does not exist`);
    }

    const updates = { name, accessLevels };
    const updatedRole = await roleRepository.updateRole(
      existingRole._id,
      updates
    );

    return updatedRole;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deleteRoleById(id) {
  try {
    return await roleRepository.deleteRoleById(id);
  } catch (err) {
    throw new Error(err.message);
  }
}

async function getRole() {
  try {
    return await roleRepository.getRole();
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  createRole,
  updateRole,
  deleteRoleById,
  getRole,
};
