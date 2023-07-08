const Users = require('../models/users');
const bcryptJs = require('bcryptjs');
const Jwt = require('../helpers/jwt');
const { genRandomNumber } = require('../helpers/otp');
const { options } = require('../routes/categories');
const axios = require('axios');
const OTP_verification = require('../models/otp_verification');

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
        return AuthControllers.otpSend(users._id, users.phone_no)
    };

    static async otpSend(user_id, phone_no) {
        const otp = { user_id, phone_no, code: genRandomNumber(), status: 'waiting' }
        // expiryTime for OTP:
        let expiryTime = new Date();  // current time
        expiryTime.setMinutes(expiryTime.getMinutes() + 5);
        otp.expires_at = expiryTime

        const response = await axios({
            method: 'post',
            url: process.env.FAST2SMS_API,
            data: {
                route: 'otp',
                variables_values: otp.code,
                numbers: phone_no
            },
            headers: {
                authorization: process.env.FAST2SMS_KEY
            }
        });
        otp.request_id = response.data.request_id 
        return OTP_verification.create(otp) 

    };

};

module.exports = AuthControllers;