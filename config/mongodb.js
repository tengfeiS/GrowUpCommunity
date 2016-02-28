var mongoose = require('mongoose');
var config = require('./config');

module.exports = function(){
	var db = mongoose.connect(config.mongodbUri);
	//导入数据模型
	return db;
}