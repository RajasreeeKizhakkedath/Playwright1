
/* function definition 
we will do here the
Accessing/invoking/calling should be done to execute the function 
*/
function fn1(){
        console.log("This is function 1");
}
/* Functions that allows dynamic values to be paased in to the functions that are manipulated inside the function body are called parameterized functions. The parameters are defined in the function definition and the values passed to the function are called arguments. */
fn1() // invoking the function
fn1() // invoking the function again
fn1() // invoking the function again
function greetings(name)/* formal parameters*/{
    console.log("Hello "+name)
}
greetings("Alice")/* actual parameter */
greetings("Bob")/* actual parameter */  

/*find the some of two dynaimic numbers using function */
function sum(a,b){
    console.log(a+b)
}
sum(10,20)/* arguments */
sum(5,15)/* arguments */        
sum(7,3)/* arguments */
sum(1.2,3.4)/* arguments */

/*return keyword is used to return a value from the function and it also terminates the function execution */
// take result from one funtion and use in another function(or place )//
function greek(name){
   return name
}
let result = greek("Alice")
console.log(result)
//take a number from the user and check the number is even//
function isEven(num){
    if (num%2==0){
        return num+" is even"

    }
}
let result1 = isEven(10)
console.log(result1)
let result2 = isEven(15)
console.log(result2)