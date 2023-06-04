require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const middlewares = require('./helpers/middlewares');

const app = express();

app.use(express.json());

app.use(middlewares.errorHandlingMiddleware);

// Database & Server Connection:

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Databse Connected (())')
    app.listen(3000, () => {
      console.log("Server is Connected (())")
    })
  })
  .catch((err) => {
    console.log(err)
  })