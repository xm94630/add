#!/usr/bin/env node
var add = require('../index.js');

var a = parseFloat(process.argv[2]);
var b = parseFloat(process.argv[3]);
if (!a || !b)
  throw new Error('需要两个参数');

console.log(a+'、'+b+'相加的结果是:');
console.log(add(a,b));