/*for(let i = 0; i < 10; i++){
    console.log(i);
}   
for(let j=2; j <= 20; j=j+2){
    console.log(j);
}

let choice = ""

/* while (choice != "4"){
    print("1. Withdraw")
    print("2. Deposit")
    print("3. Balance")
    print("4. Exit")} 

    choice = input("Enter your choice: ")

print("Thank you for using ATM")*/



/*  
Keep a variable percentage to be 40
Show message "downloading" until percentage is 100. Increment percentage by 2.*/

/*let percentage = 40;

console.log("downloading");
while (percentage !== 100) {
    console.log("downloading");
    percentage= percentage + 2;
    
    } */



   /* print "Greetings". if variable flag is true, print "Greetings" again8 */

/* let flag=true
let c=0
do{
console.log("Greetings")
if(c==4){
flag =false
}
c=c+1
}
while(flag==true); */



/*let temp=100
do{
    console.log("temp is :",temp)
    temp=temp+1

}
while(temp<=150)*/
/*for of */
/*let numbers = [1, 2, 3, 4, 5]
for ( let i of numbers){
    console.log(i)
}

let name = "John Doe"
for (let i of name){
    console.log(i)
}
    */

/* write a program to save name of 4 students  and print all  THE STUDENTS NAME*/ 
/* let students = ["Alice", "Bob", "Charlie", "David"]
for ( let x of students){
    console.log(x)
} */

/* for in  it is used as an inclusion operator  */
/*let student_details = {
    name: "Alice",
    age: 20,
    grade: "A"
}
for(let key in student_details){
    console.log(key)
    console.log(student_details[key])} */


    let patient = {
        name: "John Doe",
        age: 30,
        diagnosis: "Flu"
    }
    let keys=Object.keys(patient)
    console.log(keys[1])
    console.log(patient[keys[1]])