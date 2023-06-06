const Categories = require('../models/categories');

class CategoriesControllers {

  static async createCategories(document) {
   return Categories.create(document)
  };

};

module.exports = CategoriesControllers;