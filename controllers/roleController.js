const roleService = require("../services/roleService");

exports.createRole = async (req, res) => {
  const { name, accessLevels } = req.body;

  try {
    const role = await roleService.createRole(name, accessLevels);
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRole = async (req, res) => {
  const { name, accessLevels } = req.body;
  try {
    const updatedRole = await roleService.updateRole(name, accessLevels);
    res.status(200).json(updatedRole);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await roleService.deleteRoleById(id);
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getRole = async (req, res) => {
  try {
    const role = await roleService.getRole();
    res.status(200).json(role);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
