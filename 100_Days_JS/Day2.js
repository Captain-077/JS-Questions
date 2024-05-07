//Q? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:


const generateHash = (str) => {
    if(str.length > 280 || str.length ===0){
        return false 
    }
    
   str = str.split(" ");
   str =  str.map((item) => {
            return item.replace(item[0],item[0].toUpperCase())
   })
    
    str = `#${str.join("")}`;
    
    // console.log(str)
    return str

};

console.log(generateHash("my name is slim shady"));