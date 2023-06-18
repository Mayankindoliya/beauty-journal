const express = require('express');

const router = express.Router();

const PostControllers = require('../controllers/posts');
const { queryCriteria } = require('../helpers/middlewares');

router.post('/posts/create', (req, res, next) => {
  PostControllers.createPosts(req.body, req.user)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/posts/read', (req, res, next) => {
  PostControllers.readPosts(req.criteria)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

module.exports = router;