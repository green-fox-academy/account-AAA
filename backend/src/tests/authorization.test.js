const mockRequest = require('./mockRequest');
const mockResponse = require('./mockResponse');
const OAuth = require('../MiddleWare/OAuth');

const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyM30.tfk9jgMkUXcz_p7au1bt9WdddK6NpXOLy8b51kNxGKM';

const next = jest.fn();

describe('test OAuth middleware', () => {
  it('should fail the auth for not having auth', () => {
    const req = mockRequest();
    const res = mockResponse();
    OAuth(req, res, next);
    expect(res.statusCode).toEqual(415);
    expect(res.body).toEqual('Must include authorization info');
  });

  it('should fail the auth for wrong token starts', () => {
    const req = mockRequest({ authorization: 'b' });
    const res = mockResponse();
    OAuth(req, res, next);
    expect(res.statusCode).toEqual(415);
    expect(res.body).toEqual('Must use Bearer OAuth token!');
  });

  it('should fail the auth for invalid token', () => {
    const req = mockRequest({ authorization: 'Bearer haha' });
    const res = mockResponse();
    OAuth(req, res, next);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual('Authorization failed');
  });

  it('should pass the auth', () => {
    const req = mockRequest({ authorization: `Bearer ${testToken}` });
    const res = mockResponse();
    OAuth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
