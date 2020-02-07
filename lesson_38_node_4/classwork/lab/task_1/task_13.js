let http = require('http');
const port = process.argv[2];

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let urlObj = new URL(req.url, 'http://localhost:8080');

    if (urlObj.pathname === "/api/parsetime"){
        let timeStr = decodeURIComponent(urlObj.searchParams.get('iso'));
        let date = Date.parse(timeStr);
        date = new Date(date);
        let result = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
        res.end(JSON.stringify(result));
    } else if (urlObj.pathname === "/api/unixtime"){
        let timeStr = decodeURIComponent(urlObj.searchParams.get('iso'));
        let unixtime = Date.parse(timeStr);
        let result = {"unixtime": unixtime};
        res.end(JSON.stringify(result));
    }

}).listen(port);