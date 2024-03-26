// minmax sorting
let myArr = [3, 1, 7, 4, 5, 9, 2,5,0,2,5,8,9]

function findMinMax(arr){
    if (arr.length === 0){
        return null;
    }
    
    let min = arr[0];
    let max = arr[0];
    
    for(let i=1;i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i] ;
            }
            if(arr[i] > max){
                max = arr[i]
            }
}
            return [min,max]
    }


console.log(findMinMax(myArr));