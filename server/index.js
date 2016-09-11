import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

//import users from './routes/users';

let app = express();


// We need to create a post request to users, Define the API we will users
//app.use(bodyParser.json());
//app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler))
app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/images',express.static(path.join(__dirname, 'public/assets')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log("Running on localhost 3000"))
