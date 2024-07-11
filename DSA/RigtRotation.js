const RightRotation = (arr,rotation) =>{
    
    let len = arr.length;
    
    for(i=0; i<rotation;i++){
        const last = arr[len-1]
        
        for(j=len-1;j>0;j--){
          arr[j] = arr[j-1] 
        }
       arr[0] = last
    
    }
    return arr
}

const arr1 = [1,2,3,4,5];
console.log(RightRotation(arr1,3));