const cluster = require('cluster');
const os = require('os');
if(cluster.isMaster) {
    cluster.schedulingPolicy = cluster.SCHED_RR;
    const cpus = os.cpus().length;
    console.log(`Clustering to ${cpus} CPUs`);
    for (let i = 0; i<cpus-1; i++) {
        cluster.fork();
    }

    setTimeout(()=>{
        Object.keys(cluster.workers).forEach(id => {
            cluster.workers[id].send('Hello from the master');
        });
    }, 5000);

    cluster.on('exit', (worker, code) => {
        if(code != 0 && !worker.exitedAfterDisconnect) {
            console.log('Worker crashed. Starting a new worker', code);
            cluster.fork();
        }
    });

} else {
    require('./app');
}