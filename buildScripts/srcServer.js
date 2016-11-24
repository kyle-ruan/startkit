import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

var port = 3000;

var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.get('/users', function(req, res) {
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 2, firstName: 'Tammy', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 3, firstName: 'Tina', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 4, firstName: 'Cath', lastName: 'Smith', email: 'bob@gmail.com' },
  ]);
});

app.listen(port, function(err) {
  if (err) {
    //
  } else {
    open('http://localhost:' + port);
  }
})
