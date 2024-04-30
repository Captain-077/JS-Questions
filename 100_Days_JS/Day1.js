//Q:1 Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

const findLongestWord = (str) => {
    if (str.trim().length === 0){
        return false;
    }
    
    words = str.split(" ");
    longest = words.sort((a,b) => b.length-a.length );
    console.log(longest)
    
    return longest[0];
    
};

console.log(
    findLongestWord("celloggggg fdhfgggggggggggg bhapaddd adhd")
    );