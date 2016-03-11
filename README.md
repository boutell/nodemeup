# nodemeup

nodemeup is a simple but sustainable template for creating MongoDB/Express/Node applications with Nunjucks templates.

The module architecture stays out of your face but allows you to divide your code logically and permits each module to start up in a sensible order, even if they need to do so asynchronously.

To install the dependencies:

```
npm install
```

Then run `node app` and visit `http://localhost:3000/` to see a lovely, empty list of articles in "blog order."

Sample mongo shell code to insert a test article:

```
db.articles.insert({ title: 'Test Article', body: 'Test Body', createdAt: new Date() });
```

Lots still to add here, in order to make it a slightly more self-evident example, but the key thing was to get this pattern down in a conveniently forkable form.
