'use strict';
const {server} = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 not found', ()=>{
    
  it('should respond 404 of an invalid route',() => {

    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });

});