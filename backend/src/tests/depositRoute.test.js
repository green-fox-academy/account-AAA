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

describe('Get all accounts Endpoint', () => {
  it('should return all accounts', async () => {
    const res = await request(app)
      .get('/deposit/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 1,
        depositName: 'Main Account',
        depositAmount: 0,
        interestRate: 0,
      },
      {
        id: 2,
        depositName: 'Saving Account',
        depositAmount: 0,
        interestRate: 0,
      },
      {
        id: 3,
        depositName: 'Investment Account',
        depositAmount: 0,
        interestRate: 0,
      },
    ]);
  });
});
