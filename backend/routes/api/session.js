//This file holds the resources for the route paths beginning with /api/session.
const express = require('express');
const asyncHandler = require('express-async-handler'); //The asyncHandler function from express-async-handler will wrap asynchronous route handlers and custom middlewares.

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation'); //The check function from express-validator will be used with the handleValidationErrors to validate the body of a request.


const router = express.Router();

//The POST /api/session login route will expect the body of the request to have a key of credential with either the username or email of a user and a key of password with the password of the user.
const validateLogin = [ // custom validateLogin that will check these keys and validate them:
  // It checks to see whether or not req.body.credential and req.body.password are empty. If one of them is empty, then an error will be returned as the response.

    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
    handleValidationErrors
  ];


// Log in
//Next, add the POST /api/session route to the router using an asynchronous route handler. In the route handler, call the login static method from the User model. If there is a user returned from the login static method, then call setTokenCookie and return a JSON response with the user information. If there is no user returned from the login static method, then create a "Login failed" error and invoke the next error-handling middleware with it.
router.post(
  '/',
  validateLogin, //connect the POST /api/session route to the validateLogin middleware
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


// Log out
//The DELETE /api/session logout route will remove the token cookie from the response and return a JSON success message.
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);//Notice how asyncHandler wasn't used to wrap the route handler. This is because the route handler is not async.
//You should see the token cookie disappear from the list of cookies in your

//Restore session user
//The GET /api/session get session user route will return the session user as JSON under the key of user . If there is not a session, it will return a JSON with an empty object. To get the session user, connect the restoreUser middleware.
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);//You should see the current session user information if you have the token cookie. If you don't have a token cookie, you should see an empty object returned.



module.exports = router
