let http = require('http');
let urls = [];

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

// Мне повезло и learnyounode задачу защитал, но это неверное решение, как сделать правильно пока не знаю

for (let url of urls) {
    http.get(url, response => {

            let resultText = "";
            response.on('data', data => {
                resultText += data.toString();
            });

            response.on('end', () => {
                console.log(resultText);
            })
        }
    );
}

