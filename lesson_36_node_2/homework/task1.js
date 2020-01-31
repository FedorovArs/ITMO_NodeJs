function* generatePassword(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let min = 0;
    let max = characters.length;

    for (let i = 0; i <= length; i++) {
        yield characters[Math.floor(Math.random() * (max - min + 1)) + min];
    }
}

function password_generator(length) {
    let generatePass = generatePassword(length);
    let password = "";

    for (let value of generatePass) {
        password += value;
    }

    return password;
}

console.log(password_generator(5));
console.log(password_generator(10));
console.log(password_generator(15));
console.log(password_generator(20));
