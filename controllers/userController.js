const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const signinController = async (req, res) => {
  try {
    const user = await User.find({
      email: req.body.email,
    });

    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPassword) {
        // GENERATE-TOKEN
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h',
          }
        );
        res.status(200).json({
          access_token: token,
          message: 'Signin Successfully!',
        });
      } else {
        res.status(401).json({
          error: 'Authentication Failed!',
        });
      }
    } else {
      res.status(401).json({
        error: 'Authentication Failed!',
      });
    }
  } catch {
    res.status(401).json({
      error: 'Authentication Failed!',
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
  signinController,
  getUsers,
};
