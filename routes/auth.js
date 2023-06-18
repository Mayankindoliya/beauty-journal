const express = require('express');

const router = express.Router();

const AuthControllers = require('../controllers/auth');

router.post('/auth/register', (req, res, next) => {
  AuthControllers.registerUsers(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.post('/auth/login', (req, res, next) => {
  AuthControllers.loginUsers(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;