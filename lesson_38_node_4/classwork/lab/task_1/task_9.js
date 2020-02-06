let http = require('http');
let urls = [];

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

let results = [];

for (let url of urls) {
    http.get(url, response => {

            let resultText = "";
            response.on('data', data => {
                resultText += data.toString();
            });

            response.on('end', () => {
                results[urls.indexOf(url)] = resultText;

                if (results.length === 3) {
                    for (let i = 0; i < results.length; i++) {
                        console.log(results[i]);
                    }
                }
            })
        }
    );
}

