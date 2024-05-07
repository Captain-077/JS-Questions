


    //Q:1 Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

const findLongestWord = (str) => {
    if (str.trim().length === 0){
        return false;
    }
    
    words = str.split(" ");
    console.log(words)
    const len = words.length
    for(let i=0; i < len; i++){
        
        for(j=0; j < len-i-1; j++){
            if(words[j] < words[j+1]){
                [words[j],words[j+1]] = [words[j+1],words[j]];
            }
            
        }
        
    }
    return words[0];

    
};

console.log(
    findLongestWord("celloggggg fdhfgggggggggggg bhapaddd adhd")
    );