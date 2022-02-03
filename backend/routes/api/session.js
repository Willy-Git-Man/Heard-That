//This file holds the resources for the route paths beginning with /api/session.
const express = require('express');
const asyncHandler = require('express-async-handler'); //The asyncHandler function from express-async-handler will wrap asynchronous route handlers and custom middlewares.

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();


// Log in
//Next, add the POST /api/session route to the router using an asynchronous route handler. In the route handler, call the login static method from the User model. If there is a user returned from the login static method, then call setTokenCookie and return a JSON response with the user information. If there is no user returned from the login static method, then create a "Login failed" error and invoke the next error-handling middleware with it.
router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

module.exports = router
