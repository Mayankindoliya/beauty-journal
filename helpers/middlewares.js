const Users = require('../models/users');
const Jwt = require('./jwt');


// error handling Middleware:
function errorHandlingMiddleware(err, req, res, next) {
  console.log(err)
  res.json({ 'message': err.message, 'stack': err.stack })
};

//queryCriteria Middleware: // used for Get request: 
function queryCriteria(req, res, next) {
  const criteria = {
    options: {}
  }
  if (req.query.filter) {
    criteria.filter = JSON.parse(req.query.filter)   // used as filter
  }
  if (req.query.fields) {
    criteria.fields = req.query.fields; // used as projection
  }
  if (req.query.limit) {      // used as option 
    criteria.options.limit = parseInt(req.query.limit)
  }
  if (req.query.skip) {
    criteria.options.skip = parseInt(req.query.skip)
  }
  if (req.query.sort) {
    criteria.options.sort = req.query.sort
  }
  req.criteria = criteria;
  next();
};

// authentication Middleware:
async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  try {
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      const payload = Jwt.verifyJwt(token)
      const user = await Users.findOne({ _id: payload.id }, 'first_name email username').lean()
      user.id = payload.id
      req.user = user
    }
    next()
  }
  catch (err) {
    console.log("error during authorization")
    next(err)
  }
};

module.exports = {
  errorHandlingMiddleware,
  queryCriteria,
  authenticationMiddleware
};
