const net = require('net');
const port = process.argv[2];

const server = net.createServer(function (socket) {
    let now = new Date();
    let part_1 = now.toISOString().slice(0, 10);
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let part_2 = " " + now.getHours() + ":" + minutes;
    socket.end(part_1 + part_2 + "\n" + "");
});

server.listen(port);