'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs'); //You are using the bcryptjs package to compare the password and the hashedPassword

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
  //Next, define a User model scope for currentUser that will exclude only the hashedPassword field. Finally, define another scope for including all the fields, which should only be used when checking the login credentials of a user. These scopes need to be explicitly used when querying. For example, User.scope('currentUser').findByPk(id) will find a User by the specified id and return only the User fields that the currentUser model scope allows.


  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  //These scopes help protect sensitive user information that should not be exposed to other users. You will be using these scopes in the later sections.

  User.associate = function(models) {
    // User.hasMany(models.Songs, {
    //   foreignKey: 'userId'
    // })
  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  }; //This method will return an object with only the User instance information that is safe to save to a JWT.

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   }; //It should accept a password string and return true if there is a match with the User instance's hashedPassword. If there is no match, it should return false.

   User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   }; //Accepts an id. It should use the currentUser scope to return a User with that id

   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  }; // If a user is found, then the method should validate the password by passing it into the instance's .validatePassword method. If the password is valid, then the method should return the user by using the currentUser scope

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  }; //Accepts an object with a username, email, and password key. Hash the password using the bcryptjs package's hashSync method. Create a User with the username, email, and hashedPassword. Return the created user using the currentUser scope.

  return User;
};
