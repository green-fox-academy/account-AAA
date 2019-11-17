const request = require('supertest');
const app = require('../server');

describe('Post Endpoints', ()=>{
  it ('should return a new post', async () => {
    const res = await request(app)
      .post('./deposit')
      .send({
        deposit_name: 'name',
        user_id: 2,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('post')
  })
})