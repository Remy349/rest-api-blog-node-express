import request from 'supertest'
import app from '../src/app'

describe('===> GET /api/categories', () => {
  test('Should response with a status code: HTTP 200', async () => {
    const response = await request(app).get('/api/categories').send()

    expect(response.statusCode).toBe(200)
  })
})

describe('===> GET /api/categories/:id', () => {
  test('Should response with status code: HTTP 200', async () => {
    const response = await request(app)
      .get('/api/categories/8960adfc-dc85-46d8-a22c-ff7cf83bb7cd')
      .send()

    expect(response.statusCode).toBe(200)
  })

  test('Should response with status code: HTTP 404', async () => {
    const response = await request(app)
      .get('/api/categories/8960adfc-dc85-46d8-a22c-ff7cf83bb7c')
      .send()

    expect(response.statusCode).toBe(404)
  })
})

describe('===> POST /api/categories', () => {
  test('Should response with status code: HTTP 409', async () => {
    const response = await request(app).post('/api/categories').send({
      name: 'Testing category name'
    })

    expect(response.statusCode).toBe(409)
  })
})
