'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/class-08-db';

server.start();

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(MONGODB_URI, mongooseOptions);
