// You have an array of strings representing names, and you want to create a new array that includes only the names that start with the letter 'A'. Use the Array.filter method to achieve this. Write a JavaScript function that takes an array of names as input and returns a new array containing only the names that start with 'A'.


var arrData = ["Michael","Mary","James","Abby"];
 
const evenData = arrData.filter(item => item.charAt(0) === "A");
console.log(evenData);

//=======ends with "y"=====================

var arrData = ["Michael","Mary","James","Abby"];
 
const evenData2 = arrData.filter((item) => {
   var index = item.length-1;
   return item.charAt(index) === "y"
    
});
console.log(evenData);



const books = [
  { title: 'Book1', author: 'Author1', price: 20 },
  { title: 'Book2', author: 'Author2', price: 30 },
  { title: 'Book3', author: 'Author1', price: 25 },
];


const PriceData = books.reduce((accVal,crrVal) => {
console.log(books[0].price)
// return 

},0);

