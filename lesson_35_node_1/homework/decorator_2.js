function func() {
    return [1, 2]
}

function return_object(func = func, ...names) {
    return function () {
        let valuesArray = func();

        if (valuesArray instanceof Array) {
            let result = {};
            for (let i = 0; i < names.length; i++) {
                result[names[i]] = valuesArray[i];
            }

            return result;
        } else {
            return valuesArray;
        }
    }
}

let func_decoreted = return_object(func, 'one', 'two');
console.log(func_decoreted());
let r = func_decoreted();
console.log(r.one); // 1
console.log(r.two); //2


function func2() {
    return ['Python', 'is', 'programming language'];
}

let r2 = return_object(func2, 'a', 'b', 'c')();
console.log(r2.c); // 'programming language'