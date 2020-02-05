let args = process.argv;
let result = 0;

for (item of args){
    let num = parseInt(item);
    if (!isNaN(num)){
        result += num;
    }
}
console.log(result);