/**
 * Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
 * function hoisting is a behavior in JavaScript where function declarations are moved to the top of their containing scope during the compilation phase. This allows you to call a function before it is defined in the code. For example:
 * console.log(greet()); // Output: "Hello, World!"
 * function greet() {  
 *   return "Hello, World!";
 * }
 * In this example, the function greet() is called before it is defined, but it still works because of function hoisting. However, if you try to call a function expression before it is defined, you will get an error because only function declarations are hoisted, not function expressions. For example:
 * console.log(greet()); // Error: greet is not a function
 


 */