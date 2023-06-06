const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    post_type: { type: String, enum: ["article", "video"] },
    sub_categories: [{
      name: { type: String, required: true },
      description: { type: String, required: true }
    }]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('categories', categoriesSchema);