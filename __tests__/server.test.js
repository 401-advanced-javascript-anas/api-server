'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);


describe('server API', ()=> {

  it('it can get() ', ()=> {
  
    return mockRequest
      .get('/api/v1/products')
      .then(result =>{
        expect(result.status).toBe(200);
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


it('TEST post() failure ', ()=> {
  let obj = {name: 'test-post-1'};
  return mockRequest
    .post('/api/v1/categories')
    .send(obj)
    .then(data => {
 
      expect(data.status).toBe(500);
    });
});

  


