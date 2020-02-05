const dirFilerFunc = require('./task_6_1');

let path = process.argv[2];
let filePrefix = process.argv[3];
let callback = process.argv[4];

dirFilerFunc(path, filePrefix, callback);
