require('dotenv').config();
const express = require ('express');
const session = require('express-session');
const passport = require("passport");
const flash = require('connect-flash');
const db = require ('./models');

const app = express();

app.use(express.urlencoded({ extended:true }))
app.use(express.json());
app.use(express.static('public'));


app.use(session({
  secret: "string",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', require('./routes'));

const port = process.env.PORT || 3000;

db.sequelize.sync().then(function() {
  app.listen(port, () => {
    console.log(`server started on port ${port}`)
  })
})