const { queryCriteria } = require('../helpers/middlewares');
const Post = require('../models/posts');


class PostControllers {

  static async createPosts(document, user) {
    if (!user) {
      throw new Error('user not found')
    }
    document.created_by = user
    return Post.create(document)
  };

  static async readPosts(criteria) {
   return Post.find(criteria.filter, criteria.fields, criteria.options).lean()
  }; 

};

module.exports = PostControllers;