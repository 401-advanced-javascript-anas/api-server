'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);


describe('server API', ()=> {

  it('it can get() ', ()=> {
    let obj = {name: 'test-post-2', display_name: 'anas', description: 'zain'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        
        return mockRequest.get('/api/v1/products')
          .then(result => {
           
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can post()  ', ()=> {
    let obj = {name: 'test-post-2', display_name: 'anas', description: 'zain'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
       
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
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




  // it('it can get() ', ()=> {
  //   let obj = {name: 'test-post-2', display_name: 'anas', description: 'zain'};
  //   return mockRequest
  //     .post('/api/v1/categories')
  //     .send(obj)
  //     .then(data => {
        
  //       return mockRequest.get('/api/v1/categories')
  //         .then(result => {
           
  //           Object.keys(obj).forEach(key=> {
  //             expect(result.body[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });

  it('post()', () => {
    let obj = {name: 'test-post-2', display_name: 'anas', description: 'zain'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        const record = data.body;
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('TEST post() failure ', ()=> {
    let obj = {name: 'test-post-1'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
 
        expect(data.status).toBe(500);
      });
  });

  


});