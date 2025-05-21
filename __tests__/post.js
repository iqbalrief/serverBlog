const request = require('supertest');
const app = require('../app');

let token;
let postId;

describe('Post API Test', () => {
  beforeAll(async () => {
    
    const loginRes = await request(app).post('/users/login').send({
      email: 'testuser@gmail.com', 
      password: 'password123',
    });
    token = loginRes.body.token;

    
    const res = await request(app)
      .post('/post')
      
      .set('Authorization', `Bearer ${token}`)
      .send({ content: 'Post dari unit test' });

    
    postId = res.body.data.id; 
  });

  it('should get all posts', async () => {
    const res = await request(app)
    .get('/post')
    .set('Authorization', `Bearer ${token}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeInstanceOf(Array);
  });

  it('should get post by id', async () => {
    const res = await request(app)
    .get(`/post/${postId}`)
      .set('Authorization', `Bearer ${token}`)
    
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty('content');
  });

  it('should update the post', async () => {
    const res = await request(app)
      .put(`/post/${postId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ content: 'Updated post by unit test' });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.content).toBe('Updated post by unit test');
  });

  it('should delete the post', async () => {
    const res = await request(app)
      .delete(`/post/${postId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });
});

