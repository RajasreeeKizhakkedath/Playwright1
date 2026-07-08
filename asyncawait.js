async function sum(a,b){ //asynchronise will be have fast execution2  
    return a+b //no need to add await  if there is return given in the function
}
async function display(){
    let x = await sum(1,2)
    console.log(x)
}
display()