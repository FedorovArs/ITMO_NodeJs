const events = require('events');

const eventEmitter = new events.EventEmitter();


eventEmitter.on('click', function(){
    console.log('Сработало событие click');
});

eventEmitter.emit('click');