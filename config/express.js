var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){

	console.log('init express.....');
	var app = express();
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static('./public'));

	//加了路由模块
	app.use(function(req, res, next){
		res.status(404);
		try{
			return res.json('Not Found');
		}catch(e){
			console.error('404 set headed after send');
		}
	});

	app.use(function(err, req, res, next){
		if(!err){
			return next();
		}

		res.status(500);
		try{
			return res.json(err.message || 'server error');
		}catch(e){
			console.error('500 set headed after send');
		}

	});


	return app;
};