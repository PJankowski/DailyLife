var auth = require('./controllers/auth'),
    projects = require('./controllers/projects'),
    tasks = require('./controllers/tasks'),
    path = require('path');

module.exports = function(app) {
  app.post('/api/auth/login', auth.login);
  app.post('/api/auth/signup', auth.signup);

  app.get('/api/projects', projects.getAll);
  app.post('/api/project', projects.create);
  app.get('/api/project/:id', projects.show);
  app.put('/api/project', projects.update);

  app.get('/api/tasks/:id', tasks.getAll);
  app.post('/api/task', tasks.create);

  app.get('/*', function(req, res){
    res.sendFile(path.normalize(__dirname + '/../public/index.html'));
  });
};
