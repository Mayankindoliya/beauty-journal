const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpVerificationSchema = new Schema (
  {
    user_id: Schema.Types.ObjectId,
    phone_no: String,
    code: Number,
    status: {
      type: String,
      enum: ['waiting', 'verified', 'expired']
    }, 
    expires_at: Date,
    request_id: String
  },
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
  }
);

module.exports = mongoose.model('otp_verification', otpVerificationSchema);