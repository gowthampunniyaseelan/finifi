const adminRole = require("../seeders/admin");
const approverRole = require("../seeders/approver");
const dataManagerRole = require("../seeders/dataManager");
const initiatorRole = require("../seeders/initiator");

async function predefinedRoles() {
  adminRole()
  approverRole()
  dataManagerRole()
  initiatorRole()
}

module.exports = predefinedRoles;