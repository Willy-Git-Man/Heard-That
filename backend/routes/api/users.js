const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();


//Sign Up
//Next, add the POST /api/users route to the router using the asyncHandler function and an asynchronous route handler. In the route handler, call the signup static method on the User model. If the user is successfully created, then call setTokenCookie and return a JSON response with the user information. If the creation of the user is unsuccessful, then a Sequelize Validation error will be passed onto the next error-handling middleware.
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

module.exports = router;
