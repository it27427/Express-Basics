const mongoose = require('mongoose');

// define User model schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required.'],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
      unique: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
