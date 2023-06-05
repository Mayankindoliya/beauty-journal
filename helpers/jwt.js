const jwt = require('jsonwebtoken');

function createJwt(payload) {
 return jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: '2 days'})
};

module.exports = {
  createJwt
};