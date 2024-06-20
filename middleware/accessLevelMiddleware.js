const jwt = require('jsonwebtoken');
const roleRepository = require('../repositories/roleRepository');

const accessLevelMiddleware = (allowedRoles) => async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
          token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          let role = await roleRepository.findRoleById(decoded.roleId);
          if(role && allowedRoles.includes(role.name)){
            const accessLevels = role.accessLevels;
            const reqPathEndPoint = "/" + req.path.split("/")[req.path.split("/").length-1];
            const findPage = accessLevels.find(path=>path.page === reqPathEndPoint)
            if(findPage){
              const requiredAccess = findPage.accessType;
                if (requiredAccess === 'read-write' || (requiredAccess === 'read-only' && req.method === 'GET')) {
                    next();
                }else{
                  res.status(401).json({ message: 'Not authorized, Access denied' });
                }
            }
          }
      } catch (error) {
          res.status(401).json({ message: 'Not authorized, token failed' });
      }
  }

  if (!token) {
      res.status(401).json({ message: 'Not authorized, no token' });
  }
};
module.exports = accessLevelMiddleware;