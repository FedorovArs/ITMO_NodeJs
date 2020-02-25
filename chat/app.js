var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var uuidv4 = require('uuid/v4');

server.listen(9000);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

let users = [];
let rooms = [];
let generalChatUsers = [];
let connections = [];

io.sockets.on('connection', function (socket) {
    console.log("Соединение успешно установлено");
    connections.push(socket);

    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnect выполнен успешно");
    });

    // socket.on('send mess', function (data) {
    //     generalChatUsers.add(data.name);
    //     io.sockets.emit('add mess', {mess: data.mess, name: data.name})
    // });

    //Отправляем сообщение
    socket.on('send mess', function (data) {
        if (!generalChatUsers.includes(data.name)) {
            generalChatUsers.push(data.name);
        }
        io.sockets.emit('add mess', {mess: data.mess, name: data.name})
    });


    socket.on('get users', function (data) {
        let socket_id = io.sockets.connected[socket.id];
        socket_id.emit('general users', {users: generalChatUsers});
    });

    socket.on('create room', function (data) {
        let isRoomExist = false;

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].name.toLowerCase() === data.roomName.toLowerCase()) {
                isRoomExist = true;
            }
        }

        if (!isRoomExist) {
            let roomId = uuidv4();
            socket.join(roomId);
            let roomSocket = io.sockets.connected[socket.id];
            rooms.push({name: data.roomName, id: roomId, socket: roomSocket});
            io.sockets.emit('create room info', {
                mess: "Комната с указанным именем успешно создана",
                name: data.name
            })
        } else {
            io.sockets.emit('create room info', {
                mess: "Комната с указанным именем уже существует",
                name: data.name
            })
        }

    });
});

