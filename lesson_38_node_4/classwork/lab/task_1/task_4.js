const fs = require('fs');
let path = process.argv[2];

fs.readFile(path, (err, data) => {
    let textArr = data.toString().split('\n');

    console.log(textArr.length - 1);
});
