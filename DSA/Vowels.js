function Findvowels(string){
    let vowels = "aeiou";
    let result = [];
    for(i=0;i<string.length;i++){
       for(j=0;j<vowels.length;j++){
           if(string[i] == vowels[j]){
            result.push(string[i])
           }
       }
    }
    
    return result;
}

// let string = ["hire"]

const VowelsResult = Findvowels("openhimheeeeer");
console.log(VowelsResult);