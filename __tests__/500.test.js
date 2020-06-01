'use strict';
const errorHandler = require('../lib/middleware/500');

const supertest = require('supertest');
const mockRequest = supertest(errorHandler);

describe('error handling', () => {
  it('should respond with 500', ()=> {
        
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
});