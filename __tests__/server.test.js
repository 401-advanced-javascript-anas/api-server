'use strict';

const {server} = require('../lib/server');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server',()=>{
 
  it('should respond', ()=> {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
  it('should get products', ()=> {
    return mockRequest
      .get('/products/1')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
  it('should post products', ()=> {
    return mockRequest
      .post('/products')
      .send('posted')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('should update products', ()=> {
    return mockRequest
      .put('/products/1')
      .send('updated')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
    
  it('should delete data', ()=> {
    return mockRequest
      .delete('/products/1')
      .send('deleted')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
    
});
    

     
it('should respond', ()=> {
  return mockRequest
    .get('/categories')
    .then(results => {
      expect(results.status).toBe(200);
    });
});
      
it('should get categories', ()=> {
  return mockRequest
    .get('/categories/1')
    .then(results => {
      expect(results.status).toBe(200);
    });
});
      
it('should post categories', ()=> {
  return mockRequest
    .post('/categories')
    .send('posted')
    .then(results => {
      expect(results.status).toBe(200);
    });
});
      
it('should update categories', ()=> {
  return mockRequest
    .put('/categories/1')
    .send('updated')
    .then(results => {
      expect(results.status).toBe(200);
    });
});
      
it('should delete categories', ()=> {
  return mockRequest
    .delete('/categories/1')
    .send('deleted')
    .then(results => {
      expect(results.status).toBe(200);
    });
});
    

