const jwt = require('jsonwebtoken');

const checkSignin = (req, res, next) => {
  const { authorization } = req.header;

  try {
    const token = authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { email, userId } = decode;
    req.email = email;
    req.userId = userId;
    next();
  } catch {
    next('Authorization Failure!');
  }
};

module.exports = checkSignin;
