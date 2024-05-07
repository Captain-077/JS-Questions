
// Q write a function that takes two parameters a string and a character to count

const countChar = (str,char) => {
    
    if(str.length === 0){
        false
    }
    char = char.toLowerCase();
    
const count =  str.split("").reduce((acc,curchar) => {
    if(curchar === char){
        acc++
    }
    return acc
    
},0)

console.log(count)
    
    
    
}

console.log(countChar("helloooooooo","o"));