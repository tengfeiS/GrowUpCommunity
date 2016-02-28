var express = require('./config/express');
var mongodb = require('./config/mongodb');

var db = mongodb();
var app = express();

module.exports = app;
