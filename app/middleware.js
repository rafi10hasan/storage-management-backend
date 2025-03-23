const express = require('express');
const cors = require('cors');
require('dotenv').config('./.env');
const cookieParser = require("cookie-parser");

const middleware = [
    cors({
        origin: process.env.FRONTEND_HOST,  
        credentials: true,
        optionsSuccessStatus: 200,  
    }),
    express.json(),
    cookieParser(),
    express.urlencoded({ extended: true }),
    
]

module.exports = middleware