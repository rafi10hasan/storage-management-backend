const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET_TOKEN,{
    expiresIn: process.env.TOKEN_EXPIRED_IN,
  });
}

module.exports = generateToken;
