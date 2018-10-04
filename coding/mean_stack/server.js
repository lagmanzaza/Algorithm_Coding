const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my-project');
const app = express();
// setUp mvc folder 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/controller'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/pages/'));
app.use(expressValidator());
// web server
app.listen(3000);
console.log('Running in localhost:3000');

// mongoose model
const User = require('./models/user.model');

// Rest API

// Register
app.post('/register', (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let newUser = new User();
        newUser.email = req.body.email;
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.save(function (err, newUser) {
            if (err) {
              console.log(err);
              res.redirect('/')
            } else {
              console.log('Succesful');
              res.redirect('/pages/profile.html')
            }
        });
});
app.get('/register', (req, res) => {
  mongoose.model('User').find().exec(function(err, user) {
    res.send(user)
    console.log(user)
  });
});
app.get('/register/:id', (req, res) => {
  mongoose.model('User').findById(req.params.id).exec(function(err, user) {
    res.send(user)
  });
});