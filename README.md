# Wills-Second-React-Project


# Heard-That
https://heard-that.herokuapp.com/ |
Heard-That is a take on sound cloud where users can upload and play their songs and create albums/playlists

* Technologies Used
  * Javascript
  * CSS
  * HTML
  * Express
  * Node.js
  * Postgres
  * Sequelize
  * React
  * Redux


* MVP
  * Hosted on Heroku
  * New Account Creation, Login, Demo Login
    * Users can sign up, sign in, and log out
    * Users can use demo button to login to see all the features
  * Songs
    * Users can create, view, edit, and delete songs
    * Users can see saved data when using demo login
  * Albums
    * Users can create, view, edit, and delete albums
    * Users can add songs to albums

* Instructions
  * Git clone https://github.com/Willy-Git-Man/Heard-That
  * Run npm install
  * Install postgres
  * Create a new user in postgresQl with CREATEDB and PASSWORD in PSQL
    -CREATE USER <username> WITH CREATEDB PASSWORD <'password'>
  * Create a .env file (copy env.example)
  * Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuartion found in your .env file
    -"proxy": "http://localhost:5000"
  * Run npx dotenv sequelize db:create
  * Run npx dotenv sequelize db:migrate
  * Run npx dotenv sequelize db:seed:all
  * For the audio player run:
  npm i react-h5-audio-player
Or
yarn add react-h5-audio-player

  * Run npm start in the backend
  * Run npm start in the frontend
  * If it doesn't load, go directly to http://localhost:3000 in the URL
  * Use demo login or create your own user

* Backend Dependencies:
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "csurf": "^1.11.0",
    "dotenv": "^16.0.0",
    "express": "^4.17.2",
    "express-async-handler": "^1.2.0",
    "express-validator": "^6.14.0",
    "helmet": "^5.0.2",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.10.0",
    "per-env": "^1.0.2",
    "pg": "^8.7.1",
    "sequelize": "^5.22.5",
    "sequelize-cli": "^5.5.1"
  },
  "devDependencies": {
    "dotenv-cli": "^4.1.1",
    "nodemon": "^2.0.15"
  }
