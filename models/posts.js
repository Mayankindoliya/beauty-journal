const mongoose = require('mongoose');
const { schema } = require('./users');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    summary: { type: String, required: true },
    cover_image: { type: String },
    video_link: { type: String },
    category: {
      _id: false,
      id: {type: Schema.Types.ObjectId, ref: 'categories'},
      name: String
    },
    tags: [
      {
        _id: false,
        id: {type: Schema.Types.ObjectId, ref: 'tags'},
        name: String
      }
    ],
    created_by: {
      _id: false,
      id: {type: Schema.Types.ObjectId, ref: 'users'},
      name: String,
      username: String
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('posts', postSchema);