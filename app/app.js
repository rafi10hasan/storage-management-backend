require('dotenv').config('../.env');

const express = require('express');
const app = express();
const middleware = require('./middleware');
const route  = require('./route');
const connectDB = require('../database/database.config');
const authRoute = require('../routes/authRoute')
const fileRoute = require('../routes/fileRoute')
const profileRoute = require('../routes/profileRoute')

const summaryRoute = require('../routes/summaryRoute')
const { globalErrorHandler } = require('./error');
connectDB()

app.use(middleware)
app.use(route);

app.use('/api/v1/auth',authRoute);
app.use('/api/v1',fileRoute)
app.use('/api/v1/dashboard',summaryRoute)
app.use('/api/v1/profile',profileRoute)
app.use(globalErrorHandler)
module.exports = app