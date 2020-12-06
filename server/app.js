import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

import productRoutes from './routes/product.server.route';

const app = express();

bb.extend(app);

// cross origin
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// app configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// server port
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://haimb:pa55w0rd@productindex.psoib.mongodb.net/ProductIndex?retryWrites=true&w=majority";

// database connection
mongoose.Promise = global.Promise;
// external db config
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// local db config
/* mongoose.connect('mongodb://localhost/mern-product-app', {
  useMongoClient: true,
}); */

SourceMapSupport.install();

app.use('/api', productRoutes);

app.get('/', (req,res) => {
  return res.end('Api working');
})

// 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// server start
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
