const request = require('supertest')
const app = require('../../../index')

describe('Testing Endpoints', () => {
  it('should retrieve a childfile', async () => {
    const res = await request(app)
      .get('/api/v1/tree/childFile')
      .send({
        path: 'public/images/image-1.jpg',
      })

    expect(res.statusCode).toEqual(200)
  })
})

describe('Testing Endpoints', () => {
    it('shouldnt retrieve a childfile, because i will send a directory', async () => {
      const res = await request(app)
        .get('/api/v1/tree/childFile')
        .send({
          path: 'public/images',
        })
  
      expect(res.statusCode).toEqual(404)
    })
})

describe('Testing Endpoints', () => {
  it('should retrieve a tree directory with depth 1 -sending root folder-', async () => {
    const res = await request(app)
      .get('/api/v1/tree/children')
      .send({
        path: './',
      })

    expect(res.statusCode).toEqual(200)
  })
})

describe('Testing Endpoints', () => {
  it('should retrieve a tree directory with depth 1 -sending random folder-', async () => {
    const res = await request(app)
      .get('/api/v1/tree/children')
      .send({
        path: 'public/images',
      })

    expect(res.statusCode).toEqual(200)
  })
})

describe('Testing Endpoints', () => {
  it('should retrieve an error given that I send an invalid path', async () => {
    const res = await request(app)
      .get('/api/v1/tree/children')
      .send({
        path: 'carolina/images',
      })

    expect(res.statusCode).toEqual(404)
  })
})
