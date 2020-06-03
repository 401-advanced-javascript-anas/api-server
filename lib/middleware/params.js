'use strict';

function getParams (req, res, next) {
  let model = req.params.model;
 
  
  switch (model) {
  case 'products':
    req.model = require(`../models/${model}/${model}`);
    // req.model = require(`../models/model`);
    next();
    return;
  case 'categories':
    req.model = require(`../models/${model}/${model}`);
    // req.model = require(`../models/model`);
    
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

module.exports = getParams;

