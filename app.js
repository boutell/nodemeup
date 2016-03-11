var async = require('async');
var _ = require('lodash');

var modules = [ 'mongodb', 'express', 'routes', 'listen'];

var context = {
  db: {
    url: 'mongodb://localhost/nodemeup',
    collections: [ 'articles' ]
  },
};

context = _.merge(context, require('./data/local.js'));

return async.eachSeries(modules, function(module, callback) {
  require('./modules/' + module + '.js')(context, callback);
}, function(err) {
  if (err) {
    throw err;
  }
  console.log('Ready.');
});

