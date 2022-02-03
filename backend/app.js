const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");


const { ValidationError } = require('sequelize');
const { environment } = require("./config");
const isProduction = environment === "production";
const routes = require("./routes");
const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

app.use(routes); // Connect all the routes


// Catch unhandled requests and forward to error handler.
//The first error handler is actually just a regular middleware. It will catch any requests that don't match any of the routes defined and create a server error with a status code of 404.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
//The second error handler is for catching Sequelize errors and formatting them before sending the error response.
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});


// Error formatter
//The last error handler is for formatting all the errors before returning a JSON response. It will include the error message, the errors array, and the error stack trace (if the environment is in development) with the status code of the error message.
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});



module.exports = app;
