'use strict';

var expect = require('chai').expect;

describe('PostsModel', function() {
    it('should exist', function(){
        var PostsModel = require('./Posts.js');
        expect(PostsModel).to.not.be.undefined;
    });
});