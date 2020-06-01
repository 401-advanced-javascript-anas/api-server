'use strict';


function errorHandler (err, req, res, next){
  res.status(500);
  res.json({err: err});
}


module.exports = errorHandler;