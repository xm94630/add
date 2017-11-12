#!/usr/bin/env node
var add = require('../index.js');

var a = process.argv[2];
var b = process.argv[3];
if (!a || !b)
  throw new Error('需要两个参数');

add(a,b)


console.log('哟哟，我就是全局命令。但是什么也没有做~');
console.log(add.toString());