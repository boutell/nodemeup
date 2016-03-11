var express = require('express');
var nunjucks = require('nunjucks');

module.exports = function(context, callback) {
  var app = express();
  context.app = app;
  app.use(express.static(__dirname + '/../public'));
  nunjucks.configure(__dirname + '/../views', { express: app });
  return callback(null);
};
