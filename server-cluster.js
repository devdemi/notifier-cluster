var config = require('./config')
var cluster = require('cluster');
var store = new (require('socket.io-clusterhub'))();
//var numCPUs = require('os').cpus().length;
var numCPUs = 2;


if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {
  var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.createServer(app);
  var io = require('socket.io').listen(server);

  app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  server.listen(config.application.port);

  // setup socket.io
  io.configure(function() {
    io.set('log level', config.application.loglevel);
    io.set('store', store);
  });

  var redisClient = require("redis").createClient(config.redis.port, config.redis.host);
  if (config.redis.auth) {
  	redisClient.auth(config.redis.auth);
  }
  var subscribe = require("redis").createClient(config.redis.port, config.redis.host);
  if (config.redis.auth) {
    subscribe.auth(config.redis.auth);
  }

  var channelName = 'notifier-message'

  // listen for new connections
  io.sockets.on('connection', function(socket) {
  	socket.once('auth', function(userId, pass) {
        redisClient.get('notifier-user:' + userId, function (err , reply) {
	          if (reply){
	          	console.log('Pass:' + reply);
              subscribe.subscribe(channelName);
              socket.userId = userId;
	          	socket.emit('auth', 'ok');
	          } else {
              console.log('Wrong Pass');
	          	socket.disconnect();
	          }
	      });

        subscribe.on("message", function(channel, message) {
          var obj = JSON.parse(message);
          console.log('Chanel[' + channel + '] get message ' + socket.userId + '==' + obj.toUserId)
          if (socket.userId == obj.toUserId) {
              console.log('Sent message [' + channel + ']:' + socket.id + ': ' + message)
              socket.send(message);
          }
      });
  	});
  });
}