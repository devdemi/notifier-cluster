var config = {}

config.redis = {};
config.application = {};

config.redis.host = '127.0.0.1';
config.redis.port = 6379;
config.redis.channel = 'notifier-message';      
config.redis.userPrefix = 'notifier-user:';      
config.redis.auth = '';
config.application.port = 3000;
config.application.loglevel = 1;

module.exports = config;