const pallendrom = (str) => {
    
    let len = str.length;
    
    for(i=0;i<len/2;i++){
        if(str[i] !== str[len-i-1]){
            return false
        }
    }
    return true
}

console.log(pallendrom("hello"));