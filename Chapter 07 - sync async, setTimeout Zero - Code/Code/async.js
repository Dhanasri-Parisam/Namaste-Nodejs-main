const fs = require("fs");
const https = require("https");

console.log("Asynchronous Javascript")

var a = 5;
var b = 10;

// it is a synchronous function blocking function
// if the file is large it will block the main thread
// remaining code will wait for this to finish
//Synchronous function
//it will block the main thread

fs.readFileSync("./file.txt", "utf8");
console.log("This will execute only after reading the file")

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("data fetch successfully")
})
.on('error', (err) => {
    console.error('Request error:', err.message);
});
setTimeout(() => {
    console.log("Execute it after 5 seconds")
}, 5000)

//asynchrous functions
fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("file data:" + data)
})

function multiply(x, y) {
    const result = x * y;
    return result
}

const c = multiply(a, b)
console.log("Multiplication ans is:" + c)


/*

cd "C:\Users\paris\Desktop\Namaste-Nodejs-main"
cd "Chapter 07 - sync async, setTimeout Zero - Code"
cd Code
node async.js

FINAL Output Reason
1. Asynchronous Javascript	Synchronous code
2. This will execute only after reading the file Synchronous code
3. Multiplication ans is:50	Synchronous code
4. file data: ...	File read finished (async callback)
5. data fetch successfully	Inside same async callback
6. Execute it after 5 seconds	setTimeout finishes after 5 seconds
*/