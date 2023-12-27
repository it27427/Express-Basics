const express = require('express');
const router = express.Router();
const {
  signupController,
  signinController,
  getUsers,
} = require('../controllers/userController');

router.post('/signup', signupController);
router.post('/signin', signinController);
router.get('/all', getUsers);

module.exports = router;
