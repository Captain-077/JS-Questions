// Ques 1: Implement bubble sort in javascript
// write a function to sort the given array nums in ascending order

// input: nums = [29,10,14,37,14] 
// output: [10,14,14,29,37]


const bubbleSort = (arr) => {
    const len = arr.length
    
    for(let i=0; i < len; i++){
        
        for(j=0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
            
        }
        
    }
    return arr;
}
const nums = [29,10,14,37,14] ;

console.log(bubbleSort(nums));