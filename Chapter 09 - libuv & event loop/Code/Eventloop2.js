const fs = require("fs");
const a = 999;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log(data);
})

setTimeout(() => console.log("setimeout"), 0)

process.nextTick(() => console.log("Process.nexttick"))

function printA() {
    console.log("a:" + a);
}
printA();
console.log("last line of program")

//output
// a:999
//Last line of program
//process.nexttick
//promise resolved
//settimeout
//setimmediate
//file data

// what happens in side libuv?
// 1. call stack
// 2. microtask queue (process.nextTick, promise callbacks)
// 3. timers phase (setTimeout, setInterval)
// 4. pending callbacks phase
// 5. idle, prepare phase - idle is empty, prepare is internal use
// 6. poll phase (re trieving new I/O events; executing I/O related callbacks (almost all except close callbacks, timers, and setImmediate))
// 7. check phase (setImmediate)
// 8. close callbacks phase (e.g., socket.on('close', ...))