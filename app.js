const express = require('express');
const dotenv = require('dotenv').config({ path: './config/dotenv.env' });
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db/connectdb');
const checkSignin = require('./middlewares/checkSignin');

const app = express();

app.set('view engine', 'ejs');

// DEFINE DB-URL
const url = process.env.MONGODBURI;
// CONNECT-DB
connectDB(url);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// DEFAULT ERROR-HANDLER
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    error: err,
  });
};

app.use(errorHandler);

// IMPORT-ROUTES
const userRouter = require('./routes/userRouter');

// DEFINE-ROUTES
app.use('/api/user', userRouter);

app.get('/', checkSignin, (req, res) => {
  res.render('index');
});

module.exports = app;
