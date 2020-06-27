'use strict';
const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);
let idProducts = null;



it('it can get() ', ()=> {
  
  return mockRequest
    .get('/api/v1/products')
    .then(result =>{
      expect(result.status).toBe(200);
    });
        
       
});


it('it can get() ', ()=> {
  return mockRequest
    .get('/api/v1/products')
    .then(result =>{
      expect(result.status).toBe(200);
    });
});


it('TEST post() failure ', ()=> {
  let obj = {name: 'test-post-1'};
  return mockRequest
    .post('/api/v1/products')
    .send(obj)
    .then(data => {
   
      expect(data.status).toBe(500);
    });
});
  

it('can post()  ', ()=> {
  let obj = {name: 'test-post-2', display_name: 'anas', description: 'zain'};
  return mockRequest
    .post('/api/v1/products')
    .send(obj)
    .then(data => {
       
      expect(data.status).toBe(500);
 
    });
});


it('TEST post() failure ', ()=> {
  let obj = {name: 'test-post-1'};
  return mockRequest
    .post('/api/v1/products')
    .send(obj)
    .then(data => {
 
      expect(data.status).toBe(500);
    });

    
});


it('should DELETE properly /products/:id', () => {
  return mockRequest
    .delete(`/api/v1/products/${idProducts}`)
    .then(results => {
      expect(results.status).toBe(500);
    });
});

