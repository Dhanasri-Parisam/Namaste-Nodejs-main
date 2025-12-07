//Modules protects their variables and fucntion to leak
console.log("Reached at the sum module")
// var x = "Hello from Dhanu"
function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
}
console.log(module.exports)
//Below are all the same type of module exports
// module.exports.x=x;
// module.exports.calculateSum=calculateSum
module.exports = { calculateSum }
console.log(module.exports)

/*
function test(){
    const a = 10;
    function innerTest(){
        console.log("Inner Test function")
    }
    innerTest();
    console.log("Test function in sum module")
}

// can we access a and innerTest from outside this module?
// the answer is NO
// why because modules protect their variables and functions from leaking outside
// we can only access what we export
// exporting test function module.exports.test=test;

*/

/*
 - require("./sum")
 - all the code of the module wrapped inside a function(IIFE)
 - this function is immediately invoked
 - this function has its own scope
 - variables and functions defined inside this function are not accessible from outside
 - only what is exported via module.exports is accessible from outside


(function (){
    console.log("Reached at the sum module")
    // wrapped inside this function it is independent of the global scope
    var x = 1000;
})();
var x = 1000; //it does not interfere with this x 
console.log(x); //1000 

*/

/*
Q. How are variables and functions private in different modules?
- Each module is wrapped inside a function(IIFE)
- This function has its own scope
- Variables and functions defined inside this function are not accessible from outside
- Only what is exported via module.exports is accessible from outside

Q. How do you get access to module's exports, require?
- Nodejs passes module, exports, require as parameters to the function wrapping the module code

Example:
function (require, module, exports){
    //module code here
}


*/

/*
// require ("./sum")
 - require is a function provided by Nodejs to load modules
 - it takes module path as argument
 - it returns module.exports of the loaded module
 
Q. How does require work internally?
- 5 steps to require a module - 
1. Resolve the module path - ./localpath or module name
2. Load the module code from the file system - read the file content
3. Wrap the module code inside a function(IIFE) - function (require, module, exports){ //module code here }
4. Create a module object with exports property - var module = { exports: {} }
5. caching - store the module object in require.cache & main purpose is to avoid reloading the same module multiple times

*/

/*

- some tips to good developer to explore all properties of code can be found on https://nodejs.org/api/modules.html
- github nodejs repo - it is open source you can explore the code of nodejs on github
- it consists of c++ code and javascript code
- javascript code is in lib folder
- modules code is in lib/module.js file

- all the code exists in lib/module.js file
- you can explore how require works internally by reading the code in lib/module.js file
- amazing thing about open source you can read the code of nodejs itself
- if your code is not working as expected you can always go and read the code of nodejs to understand how it works internally
- it will make you a better developer

*/