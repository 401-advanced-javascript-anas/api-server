'use strict';

const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const logRequest = require('./middleware/logger');
const timestamp = require('./middleware/timestamp');


const express = require('express');
const app = express();

app.use(express.json());
app.use(logRequest);


// *******************************************\\

// Products (GET, POST, PUT, DELETE)

app.get('/products', timestamp, (req, res) => {
  console.log(req.query);
  let output = {
    type: req.query.type,
  };
  res.status(200).json(output);
});

app.get('/products/:id',timestamp, (req, res) => {
  console.log('req.query: ', req.query);
  console.log('req.params: ', req.params);
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});

let dbProArr = [];
app.post('/api/po/products',timestamp, (req, res) => {
  console.log(`requesting body: ${req.body}`);
  let ps = req.body.ps;
  let record = {
    ps: ps,
  };
  record.id = dbProArr.length + 1;
  dbProArr.push(record);
  res.json(record);
});

app.put('/api/pu/products/:id', (req, res) => {
  let id = req.params.id;
  let {id_, name, display_name, description} = req.body;
  let safeValues = {id_, name, display_name, description};
  dbProArr = dbProArr.map((results) =>{
    if (results.id === parseInt(id)){
      return safeValues;
    }
    else{
      return results;
    }
  });
  res.json(safeValues);
});

app.delete('/products/:id', (req, res) => {
  // let id = req.params.id;




});

// ************************************************\\

// Categories (GET, POST, PUT, DELETE)


app.get('/categories',timestamp, (req, res) => {
  console.log(req.query);
  let output = {
    name: req.query.name,
  };
  res.status(200).json(output);
});

app.get('/categories/:id',timestamp, (req, res) => {
  console.log('req.query: ', req.query);
  console.log('req.params: ', req.params);
  let output = {
    id: req.params.id,
  };
  res.status(200).json(output);
});

let dbCatArr = [];
app.post('/categories',timestamp, (req, res) => {
  console.log(`requesting body: ${req.body}`);
  let phone = req.body.phone;
  let record = {
    
  };
  record.id = dbCatArr.length + 1;
  dbCatArr.push(record);
  res.json(record);


});

app.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  let {id_, name, display_name, description} = req.body;
  let safeValues = {id_, name, display_name, description};
  dbCatArr = dbCatArr.map((results) =>{
    if (results.id === parseInt(id)){
      return safeValues;
    }
    else{
      return results;
    }
  });
  res.json(safeValues);
});

app.delete('/categories/:id', (req, res) => {


});



// *******************************************\\

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) =>{
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => {console.log(`App is listening on ${PORT}`);
    });
  },
};