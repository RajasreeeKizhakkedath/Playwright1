/* 
1 store a variable with given number .if the number is divisible by 3,print "eligible" otherwise print "not eligible" 
*/
let number=5

if(number%3==0)
{
    console.log(number +"is eligible")
}
else{
    console.log("not elegible")
}

/** print the numbers from  1 to 150  with the increment value of 2.skip printing 50,24,60 using loop control statemnet*/

for(let i=1;i<=150;i=i+2){
    if(i==50|| i==24|| i==60){
        continue;
    }
    else{
        console.log(i)
    }
}
//print hello until the counter set reaches 10

let counter=1
for(let i=counter;i<=10;i++){
console.log("hello")
}
