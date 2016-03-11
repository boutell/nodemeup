module.exports = function(context, callback) {
  var port = process.env.PORT || 3000;
  return context.app.listen(process.env.PORT || 3000, function(err) {
    if (err) {
      return callback(err);
    }
    console.log('Listening on port ' + port);
    return callback(null);
  });
};

