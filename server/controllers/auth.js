var User = require('../models/users');

exports.login = function(req, res) {
  var user = req.body;

  User.findOne({username: user.username}, function(err, loggedUser){
    if (err) {
      res.status(401).json(err);
    } else {
      if (!loggedUser) {
        res.status(401).json({msg: 'No user found'});
      }else {
        res.status(200).json(loggedUser);
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
