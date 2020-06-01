'use strict';

const errorHandler = require('./500');


function notFoundHandler (req, res, next){
  res.status(404);
  res.send({err: 'not found'});
}


module.exports = notFoundHandler;