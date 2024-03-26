myFun();
  
var myFun = function (){
    console.log("First")
}

myFun();

function myFun(){
    console.log("second");
}

myFun();


//var myfun function value got reinitialised
//functions in the memory phase are not undefined it is just the body of the fnc
//output 
//second
//first
//first


// ======================Question2===============


variable = 10;

(() => {
foo = 100;

console.log(variable);
var foo = 100;

variable = 20;
console.log(variable);
Variable);

})();

console.log(foo);
console.log(variable);

var variable = 30;

//IIFE fnc create thier own memory and code phase and self destruct itself afterwards
// so the value of foo will be undefined as it is called outside the fnc scope