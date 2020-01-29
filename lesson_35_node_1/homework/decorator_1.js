function pause(func, timeOut) {
    return function () {
        console.log('Функция выполниться с задержкой в ' + timeOut + ' секунды!');
        setTimeout(func, timeOut * 1000)
    }
}

function hello() {
    console.log("Hello");
}

let paused = pause(hello, 2);
paused();