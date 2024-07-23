const LeftRotation = (arr,num) => {
    
    let len = arr.length
    
    for(i=0;i<num;i++){
        let firstVal = arr[0]
        
        for(j=0;j<len-1;j++){
            arr[j] = arr[j+1]
        }
        arr[len-1] = firstVal
    }
    
    return arr
    
}


let newArr = [1,2,3,4,5]
console.log(LeftRotation(newArr,1))