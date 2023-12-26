const mongoose = require('mongoose');

// DEFINE-DATABASE
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log(`Database Connected Successfully!`.bgBlue);
  } catch (error) {
    console.log('Database connection error: ', error);
  }
};

module.exports = connectDB;
