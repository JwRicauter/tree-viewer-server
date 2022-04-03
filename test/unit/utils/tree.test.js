
const f = require('../../../src/utils/tree');

describe('Testing Utils', () => {
  it('should retrieve path is valid', async () => {
    const res = f.pathIsValid('./')
    expect(res).toEqual(true)
  })
})

describe('Testing Utils', () => {
  it('should retrieve path is valid', async () => {
    const res = f.pathIsValid('test/unit/routes')
    expect(res).toEqual(true)
  })
})

describe('Testing Utils', () => {
  it('should retrieve path is invalid', async () => {
    const res = f.pathIsValid('test/unit/santarosa')
    expect(res).toEqual(false)
  })
})

describe('Testing Utils', () => {
  it('should retrieve an exact amount of childrens', async () => {
    const res = f.retrieveChildrens('./')
    expect(res.length).toEqual(9)
  })
})

describe('Testing Utils', () => {
  it('should retrieve the right mimetype', async () => {
    const res = f.getMimeType('cuajada.png')
    expect(res).toEqual('image/png')
  })
})

describe('Testing Utils', () => {
  it('should retrieve the right mimetype', async () => {
    const res = f.getMimeType('www')
    expect(res).toEqual('text/plain')
  })
})