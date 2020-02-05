const fs = require('fs');
let path = process.argv[2];

let fileBuffer = fs.readFileSync(path);
let textArr = fileBuffer.toString().split('\n');

console.log(textArr.length - 1);