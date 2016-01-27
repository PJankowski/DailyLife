var User = require('../models/users'),
    jwt = require('jwt-simple'),
    secret = 'This is a secret';

exports.login = function(req, res) {
  var user = req.body;

  User.findOne({username: user.username}, function(err, loggedUser){
    if (err) {
      res.status(401).json(err);
    } else {
      if (!loggedUser) {
        res.status(401).json({msg: 'No user found, please try again.', status: 401});
      }else {
        if (user.password === loggedUser.password) {
          var payload = {username: loggedUser.username, _id: loggedUser._id};
          var token = jwt.encode(payload, secret);
          res.status(200).json(token);
        } else {
          res.status(401).json({msg: 'No user found, please try again.', status: 401});
        }
      }
    }
  });
};

exports.signup = function(req, res) {
  var user = new User(req.body);

  user.save(function(err, newUser){
    if (err) {
      res.status(401).json(err);
    } else {
      res.status(200).json(newUser);
    }
  });
};
