const jwt = require('jsonwebtoken');

function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_TOKEN); 
}

module.exports = { verifyToken };
