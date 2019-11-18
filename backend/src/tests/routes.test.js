/* eslint-env mocha */
const request = require('supertest');
const app = require('../server');

describe('Post Endpoints', () => {
  it('should return a new post', async () => {
    const res = await request(app)
      .post('/deposit')
      .send({
        deposit_name: 'name',
        user_id: 2,
      });
    expect(res.statusCode).toEqual(200);
  });
  it('should return a new post - lack request body', async () => {
    const res = await request(app)
      .post('/deposit')
      .send({
        deposit_name: 'name',
      });
    expect(res.statusCode).toEqual(400);
  });
  it('should return a new post - test headers', async () => {
    const res = await request(app)
      .post('/deposit')
      .set('content-type', 'string')
      .send(JSON.stringify({
        deposit_name: 'name',
        user_id: 2,
      }));
    expect(res.statusCode).toEqual(415);
  });
});
