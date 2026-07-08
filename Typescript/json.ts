//create a json object & display its details using for in
let Person11:object = { //object is the data type of json object
  name: "John",
  age: 30,
  city: "New York"
};


for(const[key,value] of Object.entries(Person11)){
console.log(key,value)
}

for (let key in Person11) {
    //console.log(key)
  console.log(key);
  console.log(Person11[key as keyof typeof Person11])
}
