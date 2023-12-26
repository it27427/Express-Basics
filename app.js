const express = require('express');
const dotenv = require('dotenv').config({ path: './config/dotenv.env' });
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

// DEFINE DATABASE-URL
const DBURL = process.env.MONGODBURI;

// CONNECT DB
const db = mongoose
  .connect(DBURL)
  .then(() => {
    console.log('Database Connected Successfully!');
  })
  .catch((error) => {
    console.log('Database connection error: ', error);
  });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// IMPORT-ROUTES
const userRouter = require('./routes/userRouter');

// DEFINE-ROUTES
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
