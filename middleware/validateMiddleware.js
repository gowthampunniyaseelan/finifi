const validateMiddleware = (req, res, next) => {
  const { email, password, firstName, mobile, employeeId, role, status } = req.body;
  if (!email || !password || !firstName || !mobile || !employeeId || !role || !status) {
      return res.status(400).json({ error: 'All fields are required' });
  }
  next();
};

module.exports = validateMiddleware;

