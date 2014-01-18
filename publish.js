var config = require('./config')
var redisClient = require("redis").createClient(config.redis.port, config.redis.host);
if (config.redis.auth) {
	redisClient.auth(config.redis.auth);
}

var status = [false, false, false, false, false, false, false];
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 101, "message": new Date().getTime()}), 
	function (){ status[0]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 102, "message": new Date().getTime()}), 
	function (){ status[1]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 103, "message": new Date().getTime()}), 
	function (){ status[2]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 104, "message": new Date().getTime()}), 
	function (){ status[3]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 105, "message": new Date().getTime()}), 
	function (){ status[4]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 106, "message": new Date().getTime()}), 
	function (){ status[5]=true; exit(); });
redisClient.publish(config.redis.channel, JSON.stringify({"toUserId": 107, "message": new Date().getTime()}), 
	function (){ status[6]=true; exit(); });

function exit() {
	var exit = false
	status.forEach(function(value) { exit = value })
	if (exit) {
		process.exit(1);
	}
}