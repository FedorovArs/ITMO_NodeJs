const fs = require('fs');
let path = process.argv[2];
let filePrefix = process.argv[3];

fs.readdir(path, (err, data) => {
    for (file of data) {
        if (file.endsWith("." + filePrefix)) {
            console.log(file);
        }
    }
});
