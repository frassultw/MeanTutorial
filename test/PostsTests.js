'use strict';

var expect = require('chai').expect;

describe('Check posts model', function() {
    it('should exist', function(){
        var PostsModel = require('../models/Posts.js');
        expect(PostsModel).to.not.be.undefined;
    });
});