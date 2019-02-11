let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var redis = require("redis"),
redisClient = redis.createClient();

let app = express();

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb');
var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('NodeJS Sample API's'));
app.use('/api', apiRoutes);

app.listen(port, function () {
     console.log("Application started, running on port " + port);
});
