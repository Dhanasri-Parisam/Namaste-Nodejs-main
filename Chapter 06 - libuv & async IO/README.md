# Episode-06 libuv and async IO

# Understanding `Synchronous `and `Asynchronous`

## Overview

## libuv

Libuv is a library written in the programming language C that helps nodejs to improve efficiency while running tasks parallelly. However, nodejs already have async API's. It uses Libuvs's thread pools if async API is not available in nodejs and processes are blocking the operations. Libuv doesn't perform the task itself, it only manages the operations.

- Event-driven asynchronous I/O model is integrated.
- It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
- It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.

in simple words, libuv is a library that provides Node.js with an event-driven architecture and asynchronous I/O capabilities. It allows Node.js to handle multiple operations concurrently without blocking the main thread, making it efficient for building scalable network applications.

the v8 engine is responsible for executing JavaScript code in Node.js, while libuv handles the underlying system operations, such as file system access, networking, and timers, thread pool. Libuv written c so c language easily intract with operating system. Libuv provides the event loop and asynchronous I/O capabilities that enable Node.js to perform non-blocking operations.    

## Synchronous Javascript
In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.

## Asynchronous Javascript
Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.
