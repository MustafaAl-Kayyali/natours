const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./Routes/tourRouters.js');
const userRouter = require('./Routes/userRouters.js');

const app = express();
//first MIDDLEWARE
// console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}


app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log(`Hello from the middleware 👋`);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


//third ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// final start server
module.exports = app;
