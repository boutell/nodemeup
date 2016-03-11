var mongodb = require('mongodb');
var async = require('async');

module.exports = function(context, callback) {
  var db = context.db;
  return async.series([ connect, collections ], callback);

  function connect(callback) {
    return mongodb.MongoClient.connect(
      db.url,
      function(err, connection) {
        if (err) {
          return callback(err);
        }
        db.connection = connection;
        return callback(null);
      }
    );
  }

  function collections(callback) {
    return async.eachSeries(db.collections, function(name, callback) {
      return db.connection.collection(name, function(err, collection) {
        if (err) {
          return callback(err);
        }
        db[name] = collection;
        return callback(null);
      });
    }, callback);
  }
};

