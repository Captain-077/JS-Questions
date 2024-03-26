//And you want to find the total price of books written by 'Author1', the function should return 45 (20 + 25). Feel free to write the code to solve this question.



const books = [
  { title: 'Book1', author: 'Author1', price: 20 },
  { title: 'Book2', author: 'Author2', price: 30 },
  { title: 'Book3', author: 'Author1', price: 25 },
];


const authorData = books.filter((item) => {
    return item.author == "Author1";
})

console.log(authorData)

const authorPrice = books.reduce((acc,crr) => {
    if(crr.author === "Author1"){
    return acc+crr.price;
    }
    return acc;
},0)

console.log("Total price of books written by 'Author1':", authorPrice);

