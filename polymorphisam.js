function add() {
    if(arguments.length==2)  //polymorphisam is the ability of a function to take different forms. In this case, the add function can take 2 or 3 arguments and perform addition accordingly.
    {
        return arguments[0]+arguments[1];  //overloading of function add. It can perform addition of 2 or 3 numbers based on the number of arguments passed.
    }
    else if(arguments.length==3)
    {
        return arguments[0]+arguments[1]+arguments[2];
    }
    else{
        return "invalid number of arguments";
    }
}

console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
