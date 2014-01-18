notifier-cluster
=========
users.js - creates 7 users in redis, e.g. key - notifier-user:101 and value - pass1

publish.js - publishes to redis channel to this 7 users some message

server.js - start application without clusters.

server-cluster.js - start application with clusters.


You can start server.js or server-cluster.js.

Open localhost:3000

Enter user id and password which created with user.js, e.g 101/pass1

Publish some messages to channel with publish.js.

After that you can see this message in browser. 
