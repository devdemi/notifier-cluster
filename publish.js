var config = require('./config')
var redisClient = require("redis").createClient(config.redis.port, config.redis.host);
if (config.redis.auth) {
	redisClient.auth(config.redis.auth);
}

redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 101, "message": new Date().getTime()}));
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 102, "message": new Date().getTime()}));
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 103, "message": new Date().getTime()}));
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 104, "message": new Date().getTime()}));

// process.exit(1);