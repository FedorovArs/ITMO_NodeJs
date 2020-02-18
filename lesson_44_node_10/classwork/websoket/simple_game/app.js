const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('public'));

let sockets = {

};

io.on('connection', function (socket) {

    socket.on('data', function(data){
        if(!sockets[socket.id]) {
            sockets[socket.id] = socket;
        }
        //Рассылка сообщений
        for(let id in sockets){
            if(id !== socket.id){
                sockets[id].emit('data', {
                    id: socket.id,
                    pos: data
                });
            }
        }
    });

    socket.once('disconnect', function(){
        let idDelete = socket.id;
        delete sockets[socket.id];

        for(let id in sockets){
            sockets[id].emit('delete', {
                id: idDelete
            });
        }
    });
});