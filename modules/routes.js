module.exports = function(context, callback) {
  var app = context.app;
  app.get('/', function(req, res) {
    return context.db.articles.find({}).sort({ createdAt: -1 }).toArray(function(err, articles) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      return res.render('index.html', { articles: articles });
    });
  });
  return callback(null);
};
