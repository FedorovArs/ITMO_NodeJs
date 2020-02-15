window.addEventListener('load', () => {
    const sayHello = require('./greeter').sayHello;
    const hello = sayHello('User!');
    const body =
        document.getElementsByTagName("body")[0];
    body.innerHTML = hello;
});

// module.exports.sayHelloUser = () => {
//     const sayHello = require('./greeter').sayHello;
//     const hello = sayHello('Ars!');
//     const body =
//         document.getElementsByTagName("body")[0];
//     body.innerHTML = hello;
// };