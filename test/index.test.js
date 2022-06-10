const request = require('supertest')
const app = require('../src/app')

describe('Testa a página inicial da API', () => {
  test('Deve retornar código de status 200 para requisição GET', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})