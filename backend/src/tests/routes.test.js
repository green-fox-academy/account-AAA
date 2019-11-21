const request = require('supertest');
const app = require('../../server');

jest.mock('../models/DatabaseActions');

describe('Post Endpoints', () => {
  it('should return a new post', async () => {
    const res = await request(app)
      .post('/deposit')
      .send({
        depositName: 'Main Account',
        userId: 123,
      });
    expect(res.statusCode).toEqual(422);
  });

  it('should return a new post', async () => {
    const res = await request(app)
      .post('/deposit')
      .send({
        depositName: 'new account',
        userId: 123,
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(1);
  });

  it('should return a new post - lack request body', async () => {
    const res = await request(app)
      .post('/deposit')
      .send({
        depositName: 'name',
      });
    expect(res.statusCode).toEqual(400);
  });

  it('should return a new post - test headers', async () => {
    const res = await request(app)
      .post('/deposit')
      .set('content-type', 'string')
      .send(JSON.stringify({
        depositName: 'name',
        userId: 2,
      }));
    expect(res.statusCode).toEqual(415);
  });
});
