const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://malek:1234@auctions-shard-00-00.fud2c.mongodb.net:27017,auctions-shard-00-01.fud2c.mongodb.net:27017,auctions-shard-00-02.fud2c.mongodb.net:27017/auctions?ssl=true&replicaSet=atlas-fw1kgr-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(result => {
console.log('connected');
app.listen(4000,console.log("running"));
})

const home = require('./routes/routes');
const signs = require('./routes/signs-Routes');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(home);
app.use(signs);



