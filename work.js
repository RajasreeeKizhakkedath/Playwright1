async function  a(name){
    return(name)
}
async function  b(age){
    return(age)
}
async function showdetails(){
    let sname = await a("athira")
    let sage = await b(6)
    console.log("here is the student details :",sname, sage)
}
showdetails()

console.log("*****************************")

async function mix(fruits,vegitables){
    return [fruits,vegitables]
}
 async function showfruits(){
    let fv = await mix("apple","carrot")
    console.log(fv)
 }
 showfruits()

 console.log("hii")