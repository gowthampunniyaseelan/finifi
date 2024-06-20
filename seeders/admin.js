const roleRepository = require("../repositories/roleRepository");
const allRoles = require("../enum/allRoles")

async function createPredefinedRoles() {
  const predefinedRoles = {
    name: allRoles.ADMIN,
    accessLevels: [{ page: "/settings", accessType: "read-write" }],
    isCustom: false,
  };

  const role = await roleRepository.findRoleByName(predefinedRoles.name);
  if (!role) {
    await roleRepository.createRole(predefinedRoles);
  }
}

module.exports = createPredefinedRoles;
