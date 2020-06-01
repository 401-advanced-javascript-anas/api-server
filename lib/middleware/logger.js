'use strict';

module.exports = (req, res, next) =>{
  console.log(`request info: ${req.method}, ${req.path}`);

  // requesting time and consling the info.
  let reqTime2 = new Date().toDateString();
  console.log(`request time: ${req.method}, ${req.path}, ${reqTime2}`);
  

  next();
    
};