require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const Middlewares = require('./helpers/middlewares');
const Router = require('./routes');

const app = express();

app.use(express.json());

//queryCriteria middleware // Get_request:
app.use(Middlewares.queryCriteria)

app.use(Router);

// errorHandling Middleware:
app.use(Middlewares.errorHandlingMiddleware);


// Database & Server Connection:
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Database Connected (())')
    app.listen(3000, () => {
      console.log("Server is Connected (())")
    })
  })
  .catch((err) => {
    console.log(err)
  })