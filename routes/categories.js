const express = require('express');
const router = express.Router();

const CategoriesControllers = require('../controllers/categories');

router.post('/categories/create', (req, res, next) => {
  CategoriesControllers.createCategories(req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;
