const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [ //ValidateSignup middleware will check The POST /api/users signup route will expect the body of the request to have a key of username, email, and password with the password of the user being created.
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

//Sign Up
//Next, add the POST /api/users route to the router using the asyncHandler function and an asynchronous route handler. In the route handler, call the signup static method on the User model. If the user is successfully created, then call setTokenCookie and return a JSON response with the user information. If the creation of the user is unsuccessful, then a Sequelize Validation error will be passed onto the next error-handling middleware.
// Sign up
router.post(
  '/',
  validateSignup, //connect the POST /api/users route to the validateSignup middleware. 
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


module.exports = router;
