'use strict';

//使用了那个 chai 的插件
var expect = require('chai').expect;

//这个是引入我自己写的那个js
var add = require('../index');

describe('#add', function() {
    it('结果是2', function() {
        var result = add(1,1);
        expect(result).to.equal(2);
    });

    it('结果是10', function() {
        var result = add(2,8);
        expect(result).to.equal(10);
    });
});