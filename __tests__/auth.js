const request = require('supertest');
const app = require('../app');
const { faker } = require('@faker-js/faker');

describe('Auth Test', () => {
  it('should register a new user', async () => {

    const res = await request(app).post('/users/register').send({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: 'password123',
    });

    expect(res.statusCode).toBe(201); 
    expect(res.body).toHaveProperty('status', 0);
    expect(res.body).toHaveProperty('message', 'Registrasi berhasil'); 
  });

  it('should login and return JWT', async () => {
    const res = await request(app).post('/users/login').send({
      email: 'bal@gmail.com',
      password: 'password123',
    });

    expect(res.statusCode).toBe(200);
  });

});


