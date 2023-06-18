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

router.get('/categories/read', (req, res, next) => {
  CategoriesControllers.readCategories(req.criteria)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.put('/categories/update/:id', (req, res, next) => {
  CategoriesControllers.updateCategories(req.body, req.params.id)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;
