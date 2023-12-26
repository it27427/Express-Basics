const express = require('express');
const router = express.Router();
const { signupController, getUsers } = require('../controllers/userController');

router.post('/signup', signupController);
router.get('/all', getUsers);

module.exports = router;
