const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    dob: Date,
    email: {type: String, required: true},
    address: String,
    phone_no: Number,
    username: {type: String, required: true},
    password: {type: String, required: true}
  },
  {
    timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('users', usersSchema); 