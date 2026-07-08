
/** Loop Control Statements */

/* print  from 1 to 50  exclude numbers that divisible by 3 */
for (let i =1;i<=50;i++){
    if(i%3==0){
        continue
    } 
    console.log(i)
}
/*  Loop Control statements - used to provide control over the loop flow */ 


for (let i=1;i<=50;i++){
    if(i==20){
        break
    }
    console.log(i)
}

/*print the characters of the given name and stop its execution if d is present in the name*/ 

let name = "abcdefg"
for (let ch in name ){
    if(name[ch] ==="d"){
        break
    }
    console.log(name[ch])
}
