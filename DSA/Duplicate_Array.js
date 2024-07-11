function DuplicateArr(arr){
    let duplicate = [];
    let len = arr.length
    
    for(i=0;i<len;i++){
       for(j=i+1; j<len; j++){
           if(arr[i] === arr[j]){
            duplicate.push(arr[j])
           }
       }
    }
    
    return duplicate;
}

// let string = ["hire"]

const DuplicateArrResult = DuplicateArr([2,5,2,6,8,8,9,0,0]);
console.log(DuplicateArrResult);