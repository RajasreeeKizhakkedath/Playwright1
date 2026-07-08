function fn():string{
console.log("this is an example of function");
return("this is an example of function")
 }
 fn();


 function fn2():void{
console.log("function with no return type");

 }
 fn2();


 //with parameters
 function fn3(age2:number,age:number):any{
     console.log(age2,age)
    return age2+age;
   

 }
 fn3(30,25);
//calculation functions with 3 parameters and returning the result of all the 4 arithematic operations
function fn4(a:number,b:number,c:number):any // multiple values returned as an object so give it as any 
{
    let add1=a+b+c;
    let sub1=a-b-c;
    let mul1=a*b*c;
    let div1=a/b/c;
    console.log("addition:",add1);
    console.log("subtraction:",sub1);
    console.log("multiplication:",mul1);
    console.log("division:",div1);
    return { add1, sub1, mul1, div1 };
    
}
fn4(2,4,6);