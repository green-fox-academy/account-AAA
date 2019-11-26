require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function OAuth(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res.status(415).send('Must include authorization info');
    return;
  }

  if (!authorizationHeader.startsWith('Bearer ')) {
    res.status(415).send('Must use Bearer OAuth token!');
    return;
  }

  const token = authorizationHeader.replace('Bearer ', '');
  try {
    const { userId } = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).send('Authorization failed');
  }
};
