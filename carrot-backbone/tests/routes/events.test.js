const events = require('../../src/routes/api/events')

const mockRequest = (params, body) => {
    const req = {}
    req.params = params
    req.body = body
    return req
}

const mockResponse = () => {
    const res = {}
    res.text = () => res
    res.status = () => res
    res.json = () => res
    return res
}

describe('Events Resource', function () {
    test('GET /', () => {
        const req = mockRequest()
        const res = mockResponse()
        events(req, res)
        expect(res.text).toEqual('hello world!')
    });
});