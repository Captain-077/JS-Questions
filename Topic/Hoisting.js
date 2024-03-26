console.log("value of Age is",age); //undefined
const age = 30;
console.log("value of Age is",age); //30

//beacuse of hoisting
//first code gets traverse in the memory Creation phase
//value of age is undefined;
//execution phase > value of age will be 30;




//=============================== Question2


foo = 30;
console.log("Foo",foo);

var foo = 100;

console.log("Foo",foo);

// Foo30
// Foo100