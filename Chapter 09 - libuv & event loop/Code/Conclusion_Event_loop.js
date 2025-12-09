// Conclusion of event loop chapter
const fs = require('fs');

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log(data);
})

process.nextTick(() => console.log("process.nextTick"));
console.log("last line of program");

/*
Expected output order:
last line of program
process.nextTick
Promise
setTimeout
setImmediate
file data

how this order comes to be?
1. Call stack executes synchronous code first (console.log("last line of program")) 
2. Microtask queue processes process.nextTick and Promise callbacks next
3. Timers phase executes setTimeout callbacks
4. Check phase executes setImmediate callbacks
5. Poll phase executes I/O callbacks (fs.readFile in this case)

This demonstrates the phases of the Node.js event loop and how different types of callbacks are prioritized.
Understanding this order is crucial for writing efficient asynchronous code in Node.js.
Note: Actual output may vary based on system and timing, especially for I/O operations.
event loop consists of multiple phases:
1. timers phase - executes callbacks scheduled by setTimeout and setInterval
2. pending callbacks phase - executes I/O callbacks deferred to the next loop iteration
3. idle, prepare phase - used internally by Node.js
4. poll phase - retrieves new I/O events; executes I/O related callbacks (almost all except close callbacks, timers, and setImmediate)
5. check phase - executes callbacks scheduled by setImmediate
6. close callbacks phase - executes close event callbacks (e.g., socket.on('close', ...))

Microtasks (process.nextTick and Promises) are processed after each phase before moving to the next phase.
process.nextTick has higher priority than Promises and is executed before moving to the next phase of the event loop.

how v8 engine handles microtasks?
1. After executing a script or a callback, V8 checks the microtask queue.
2. It processes all microtasks in the queue before returning control to the event loop.
3. This ensures that microtasks are executed as soon as possible, maintaining responsiveness and consistency in asynchronous operations.
Summary:
Understanding the event loop and its phases is essential for writing efficient asynchronous code in Node.js.
Different types of callbacks have different priorities, affecting the order of execution.
Microtasks (process.nextTick and Promises) are executed before moving to the next phase of the event loop, with process.nextTick having the highest priority among them.
This knowledge helps developers predict the behavior of their code and optimize performance.

*/