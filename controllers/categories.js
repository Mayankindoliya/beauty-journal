const Categories = require('../models/categories');

class CategoriesControllers {

  static async createCategories(document) {
    return Categories.create(document)
  };

  static async readCategories(criteria) {
     return Categories.find(criteria.filter, criteria.fields, criteria.option).lean()
  };

  static async updateCategories(document, id) {
   return Categories.findOneAndUpdate({_id: id}, document, {new: true}).lean()
  };

};

module.exports = CategoriesControllers;