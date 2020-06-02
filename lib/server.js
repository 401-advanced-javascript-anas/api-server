'use strict';


const express = require('express');

const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const timestamp = require('./middleware/timestamp');
const logRequest = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logRequest);

// *******************************************\\

// Products (GET, POST, PUT, DELETE)

let dbProArr = [];

app.post('/products',timestamp, (req, res) => {
  console.log(`requesting body: ${req.body}`);
  let record = {
    category: req.body.category,
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
  };
  dbProArr.push(record);
  res.status(200).json(record);
});
app.get('/timeStamp', timestamp);


app.get('/products', timestamp, (req, res) => {
  console.log(req.query);
  res.status(200).json(dbProArr);
});



app.get('/products/:id',timestamp, (req, res) => {
  console.log('req.query: ', req.query);
  console.log('req.params: ', req.params);
  let id = req.params.id;
  res.status(200).json(dbProArr[id]);
});




app.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let {id_, name, display_name, description} = req.body;
  let safeValues = {id_, name, display_name, description};
  dbProArr[id] = safeValues;
  res.status(200).json(dbProArr[id]);
});


app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  dbCatArr.splice(id,1);
  res.status(200).send('deleted :)');
});

// ************************************************\\

// Categories (GET, POST, PUT, DELETE)

let dbCatArr = [];
app.post('/categories',timestamp, (req, res) => {
  console.log(`requesting body: ${req.body}`);
  let record = {
    category: req.body.category,
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
  };
  dbCatArr.push(record);
 
  res.status(200).json(record);
});



app.get('/categories',timestamp, (req, res) => {
  console.log(req.query);
  
  res.status(200).json(dbCatArr);
});

app.get('/categories/:id',timestamp, (req, res) => {
  console.log('req.query: ', req.query);
  console.log('req.params: ', req.params);
  let id= req.params.id;
  
  res.status(200).json(dbCatArr[id]);
});



app.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  let {id_, name, display_name, description} = req.body;
  let safeValues = {id_, name, display_name, description};
  dbCatArr[id] = safeValues;
  res.status(200).json(dbCatArr[id]);
});

app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  dbCatArr.splice(id,1);
  res.status(200).send('deleted :)');
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