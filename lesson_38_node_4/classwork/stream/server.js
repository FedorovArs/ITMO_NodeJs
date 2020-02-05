// const ToUpperCase = require('./upperStream.js');
// const tUS = new ToUpperCase();
//
// tUS.on('data', function(chunk){
//     console.log(chunk)
// });
//
// tUS.write('Hello W');
// tUS.write('orld');
// tUS.end('!!!');

const ToUpperCase = require('./upperStream.js');
const tUS = new ToUpperCase();


process.stdin.pipe(tUS).pipe(process.stdout);

