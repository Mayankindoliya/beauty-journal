const jwt = require('jsonwebtoken');

function createJwt(payload) {
 return jwt.sign(payload, process.env.JWT_SECRETKEY, {expiresIn: '2 days'})
};

function verifyJwt(token) {
  return jwt.verify(token, JWT_SECRETKEY)
};

module.exports = {
  createJwt,
  verifyJwt
};