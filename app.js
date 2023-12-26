const express = require('express');
const dotenv = require('dotenv').config({ path: './config/dotenv.env' });
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db/connectdb');

const app = express();

app.set('view engine', 'ejs');

// DEFINE DB-URL
const url = process.env.MONGODBURI;
// CONNECT-DB
connectDB(url);

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
