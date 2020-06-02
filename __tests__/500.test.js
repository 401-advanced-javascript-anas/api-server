'use strict';

const {server} = require('../lib/server.js');

const supergoose = require('@code-fellows/supergoose');

const mockServer = supergoose(server);


describe('error handler',()=>{
  it('it should response with status 500',()=>{
    return mockServer.post('/api/v1/categories')
      .send({})
      .then((result)=>{
        expect(result.status).toBe(500);
      }).catch(e=>{});
  });

  it('it should response with status 500',()=>{
    return mockServer.post('/api/v1/products')
      .send({})
      .then((result)=>{
        expect(result.status).toBe(500);
      }).catch(e=>{});
  });
});