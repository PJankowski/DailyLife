var config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '8080',
  mongoUrl: process.env.MONGO || 'mongodb://localhost:27017/DailyLife'
};

module.exports = config;
