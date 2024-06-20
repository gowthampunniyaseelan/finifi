const roleRepository = require("../repositories/roleRepository");
const allRoles = require("../enum/allRoles")

async function createPredefinedRoles() {
  const predefinedRoles = {
    name: allRoles.INITIATOR,
    accessLevels: [{ page: "/dashboard", accessType: "read-only" }],
    isCustom: false,
  };

  const role = await roleRepository.findRoleByName(predefinedRoles.name);
  if (!role) {
    await roleRepository.createRole(predefinedRoles);
  }
}

module.exports = createPredefinedRoles;
