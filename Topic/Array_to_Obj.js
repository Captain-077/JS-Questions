// Sample array of key-value pairs
const array = [['name', 'John'], ['age', 30], ['city', 'New York']];

// Initialize an empty object
const obj = {};

for(i=0;i < array.length;i++){
    const [key,value] = array[i]
    obj[key] = value;
}

console.log(obj)