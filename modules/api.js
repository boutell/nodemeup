var shortid = require('shortid');

module.exports = function(context, callback) {

  var app = context.app;
  var collection = context.db.articles;

  app.get('/api/articles', function(req, res) {
    return collection.find({}).sort({ createdAt: -1 }).toArray(function(err, articles) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      return res.send(JSON.stringify(articles));
    });
  });

  app.get('/api/articles/:id', function(req, res) {
    return collection.findOne({ _id: req.params.id }, function(err, article) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      if (!article) {
        res.statusCode = 404;
        return res.send('not found');
      }
      return res.send(JSON.stringify(article));
    });
  });

  app.delete('/api/articles/:id', function(req, res) {
    return collection.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      return res.send('ok');
    });
  });

  app.post('/api/articles', function(req, res) {
    var id = shortid.generate();
    var article = {
      _id: id,
      title: req.body.title,
      body: req.body.body,
      createdAt: new Date()
    };
    return collection.insert(article, function(err) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      return res.send(JSON.stringify(article));
    });
  });

  app.put('/api/articles/:id', function(req, res) {
    var id = req.params.id;
    return collection.update({ _id: id }, {
      $set: {
        title: req.body.title,
        body: req.body.body
      }
    }, function(err) {
      if (err) {
        res.statusCode = 500;
        return res.send('error');
      }
      return res.send('ok');
    });
  });

  return setImmediate(callback);
};
