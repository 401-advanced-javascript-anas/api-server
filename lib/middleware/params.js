'use strict';

let productsModel = require('../models/categories/categories-model');
let categoriesModel = require(`../models/products/products-model`);


function getParams (req, res, next) {
  let model = req.params.model;

  
 
  
  switch (model) {
  case 'products':
    req.model = productsModel;

    // req.model = require(`../models/${model}/${model}`);
    
    next();
    return;

  case 'categories':
    req.model = categoriesModel;

    // req.model = require(`../models/${model}/${model}`);
    
    next();
    return;

  default:
    next('Invalid Model');
    return;
  }
}

module.exports = getParams;

