const Users = require('../models/users');
const bcryptJs = require('bcryptjs');
const Jwt = require('../helpers/jwt');

class AuthControllers {

  static async registerUsers(document) {
    const existingUsers = await Users.findOne({ $or: [{ username: document.username }, { email: document.email }] }).lean()
    if (existingUsers) {
      throw new Error('User is Already Exists.')
    }
    const salt = bcryptJs.genSaltSync(10)
    const hash = bcryptJs.hashSync(document.password, salt)
    document.password = hash
    return Users.create(document)
  };

  static async loginUsers(document) {
    const users = await Users.findOne({ $or: [{ username: document.username }, { email: document.email }] }).lean()
    if (!users) {
      throw new Error('User does not exists.')
    }
    if (!bcryptJs.compareSync(document.password, users.password)) {
      throw new Error('password not matched.')
    }
    return Jwt.createJwt({id: users._id}) 
  };

};

module.exports = AuthControllers;