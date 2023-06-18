const express = require('express');
const router = express.Router();

const TagsControllers = require('../controllers/tags');

router.post('/tags/create', (req, res, next) => {
  TagsControllers.createTags(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/tags/read', (req, res, next) => {
  TagsControllers.readTags(req.criteria)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next(err)
  })
}); 

module.exports = router;