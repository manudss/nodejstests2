var assert = require('assert');
require('../lib/array.js')();

describe('Array#prototype', function() {
    it('should return the first element of my array', function() {
        assert.equal([1, 3, 3, 4, 5].first(), 1);
    });
    it('should return the last element of my array', function() {
        assert.equal([1, 3, 3, 4, 5].last(), 5);
    });
});