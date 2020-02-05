const fs = require('fs');

module.exports = function (path, filePrefix, callback) {
    fs.readdir(path, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            let res = [];
            for (file of data) {
                if (file.endsWith("." + filePrefix)) {
                    res.push(file);
                    console.log(file);
                }
            }

            return callback(null, res);
        }
    })
};
