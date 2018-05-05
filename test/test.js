const http = require('http')
const assert = require('assert')
const app = require('../lib/app')

describe('app', function() {
  before( function() {
    app.start()
  })

  describe('#start', function() {
    it('starts a process listening on port 8000', function(done) {
      assert(http.Agent().createConnection({port: 8000}));
      done();
    })
  })
  describe('Array', () => {
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', () => {
        assert.equal([1,2,3].indexOf(4), -1)
      })
    })
  })
});
