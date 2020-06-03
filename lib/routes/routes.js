'use strict';

const express = require('express');
const router = express.Router();

const getModel = require('../middleware/params');

router.param('model', getModel);

router.get('/api/v1/:model', showHandler);
router.get('/api/v1/:model:id', getHandler);
router.post('/api/v1/:model', postHandler);
router.put('/api/v1/:model:id', putHandler);
router.delete('/api/v1/:model:id', deleteHandler);



function showHandler(req, res, next){
  
  req.model
    .get()
    .then(record => {res.status(200).json(record);})
    .catch(next);
}
  
  
  
function getHandler(req, res, next){

  req.model
    .get(req.params.id)
    .then(record => {res.status(200).json(record);})
    .catch(next);
}
      
  
  
function postHandler(req, res, next){

  req.model
    .post(req.body)
    .then(record => {res.status(201).json(record);})
    .catch(next);
}
      
  
  
function putHandler(req, res, next){

  req.model
    .put(req.params.id, req.body)
    .then(record => {res.status(201).json(record);})
    .catch(next);
}

  
function deleteHandler(req, res, next){

  req.model
    .delete(req.params.id)
    .then(record => {res.status(201).json(record);})
    .catch(next);
}   


module.exports = router;
