const events = require('../../src/routes/api/events')

describe('Events Resource', function () {
    test('GET /', () => {
        const req = {};
        const res = {
            text: '',
            send: function (input) { this.text = input }
        };
        events(req, res);

        expect(res.text).toEqual('hello world!');
    });
});