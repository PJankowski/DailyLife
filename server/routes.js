var auth = require('./controllers/auth'),
    projects = require('./controllers/projects'),
    path = require('path');

module.exports = function(app) {
  app.post('/api/auth/login', auth.login);
  app.post('/api/auth/signup', auth.signup);

  app.get('/api/projects', projects.getAll);
  app.post('/api/project', projects.create);

  app.get('/*', function(req, res){
    res.sendFile(path.normalize(__dirname + '/../public/index.html'));
  });
};
