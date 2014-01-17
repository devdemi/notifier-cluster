var config = {}

config.redis = {};
config.application = {};

if (process.env.PRODUCTION) {
    config.redis.host = '127.0.0.1';
    config.redis.port = 6379;
    config.redis.auth = 'temp123';
    config.redis.channel = 'notifier-message';
    config.application.port = 3000;
    config.application.loglevel = 1;
} else if (process.env.TESTING) {
    config.redis.host = '127.0.0.1';
    config.redis.port = 6379;
    config.redis.auth = 'temp123';
    config.redis.channel = '121212';
    config.session_prefix = 'PHPREDIS_SESSION:';
    config.application.port = 3000;  
    config.application.loglevel = 1;  
} else {
    config.redis.host = '127.0.0.1';
    config.redis.port = 6379;
    config.redis.auth = '121212';
    config.redis.channel = 'notifier-message';
    config.session_prefix = 'PHPREDIS_SESSION:';
    config.application.port = 3000;
    config.application.loglevel = 1;
}

module.exports = config;