const timestamp = require('../lib/middleware/timestamp');

describe ('timestamp middleware', ()=>{
  const req = {};
  const res = {};
  const next = jest.fn();

  it ('it calls the date', ()=>{
    timestamp(req,res,next);
    expect(next).toHaveBeenCalledWith();
  });
});
