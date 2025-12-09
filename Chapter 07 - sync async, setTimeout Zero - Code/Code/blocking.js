const crypto = require("node:crypto")
// const crypto = require("crypto")
const { stringify } = require("node:querystring")

console.log("Program started")

//pbkdf2- Password based key derivative function version-2 

//This is an synchronous function of pbkdf2 which will block the main thread and these type of synchronus functions does not have any callback functions
crypto.pbkdf2Sync("Dhanu", "salt", 5000000, 20, "sha512");
console.log("Fist synchronous key is generated ")

//Asynchronous function
crypto.pbkdf2("Dhanu", "salt", 50000, 20, "sha512", (err, key) => {
    console.log("Below is the asynchronous key of your password")
    console.log(key)
})

function addition(x, y) {
    const result = x + y;
    return result;
}

var c = addition(5, 10);
console.log("Addition is: " + c)


/*
// the output will be like below
Program started
Fist synchronous key is generated
Addition is: 15
Below is the asynchronous key of your password
<Buffer 7b 6f 3c d3 1e 5e 2a 7b 8d 5e 4e 0b 1c 8d 6f 3a 9e b4 d4 1f>

Explanation:
1. First line will be printed as it is a synchronous code
2. Second line will be printed after the first pbkdf2Sync function is executed as it is a blocking function
3. Third line will be printed as it is a synchronous code
4. Last line will be printed after the asynchronous pbkdf2 function is executed and its callback is called

*/