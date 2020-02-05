let http = require('http');

let url = process.argv[2];

http.get(url, response => {

        let result = "";
        response.on('data', data => {
            result += data.toString();
        });

        response.on('end', () => {
            console.log(result.toString().length);
            console.log(result.toString());
        })
    }
);