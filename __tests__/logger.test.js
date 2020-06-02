'use strict';
const logger = require('../lib/middleware/logger');

describe('logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it ('log some output .. ', ()=> {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});