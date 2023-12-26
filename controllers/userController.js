const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const signupController = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: 'Signup is successful!',
    });
  } catch {
    res.status(500).json({
      message: 'Signup failed!',
    });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signupController,
  getUsers,
};
