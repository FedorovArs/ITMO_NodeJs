let http = require('http');
const port = process.argv[2];

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let urlObj = new URL(req.url, 'http://localhost:8080');

    if (urlObj.pathname === "/api/parsetime"){
        console.log("!!!!!! " + urlObj.searchParams);
        res.end();
    } else if (urlObj.pathname === "/api/unixtime"){
        console.log("?????? " + urlObj.searchParams);
        res.end();
    }

    res.write(JSON.stringify({"hour": 14, "minute":23, "second": 15}));


}).listen(port);