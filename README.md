notifier-cluster
=========
_users.js_ - creates 7 users in redis, e.g. key - notifier-user:101 and value - pass1

_publish.js_ - publishes to redis channel to this 7 users some message

_server.js_ - start application without clusters.

_server-cluster.js_ - start application with clusters.


Usage
-----
- You can start _server.js_ or _server-cluster.js_.

- Open localhost:3000

- Enter user id and password which created with _user.js_, e.g 101/pass1

- Publish some messages to channel with _publish.js_.

- After that you can see this message in browser. 
