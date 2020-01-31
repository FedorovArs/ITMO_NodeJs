const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const dataFile = "data.txt";


http.createServer((request, response) => {// вызов метода создания http сервера

    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            let valuesArray = data.split(" ");
            let evenArr = [];
            let intValuesArr = [];

            for (let val of valuesArray) {
                if (parseInt(val) % 2 === 0) {
                    evenArr.push(parseInt(val));
                }
                intValuesArr.push(parseInt(val));
            }

            let numbers = intValuesArr.map(value => Math.pow(value, 3));

            let evenStr = evenArr.join(" ");
            let powStr = numbers.join(" ");

            fs.writeFileSync('out-1.txt', evenStr);
            fs.writeFileSync('out-2.txt', powStr);

            console.log(evenStr);
            console.log(powStr);
        }
    });

}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});