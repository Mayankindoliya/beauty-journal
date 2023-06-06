const Tags = require('../models/tags');

class TagsSchema {
  static async createTags(document) {
   return Tags.create(document)
  };

  static async readTags(criteria) {
   return Tags.find(criteria.filter, criteria.fields, criteria.options).lean() 
  };

};

module.exports = TagsSchema;