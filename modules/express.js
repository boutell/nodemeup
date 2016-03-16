var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

module.exports = function(context, callback) {
  var app = express();
  context.app = app;
  app.use(express.static(__dirname + '/../public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  nunjucks.configure(__dirname + '/../views', { express: app });
  return setImmediate(callback);
};
