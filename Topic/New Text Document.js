/*
for (let i=0; i<10; i++){
    setTimeout(() => console.log(i),0) 
}


// due to var value will be 10
// If let is used it creates different variable every time




var fullname = "piyush garg"

var obj =  {
    fullname:"hacked full name",
    
    prop:{
        fullname:"Inside prop",
        getFullname: function(){
            return this.fullname
        },
    },
    
    getFullname: function () {
        return this.fullname
    },
    
    getFullnameV2: () => this.fullname, //window function
    
    getFullnamev3: (function (){
        return this.fullname  //Executes as tranfers value to getFullnamev3 
    })()
}
    
    console.log(obj.prop.getFullname())
    console.log(obj.getFullname())
    console.log(obj.getFullnameV2())
    console.log(obj.prop.getFullnameV3)
    
    
  
    
    
    const piyush = {
        name:"piyush garg",
        sayName: function(){
            console.log(this.name)
        }
    }
    // console.log(piyush.sayName())
    const newFnc = piyush.sayName.bind(piyush) //gives new fnc to call later instead of call which just calls the value then and there.
    setTimeout(newFnc,3 * 1000)
    
      */
      
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(() => console.log("API done"));
  

      
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
