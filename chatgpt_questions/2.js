//Now, using destructuring, how would you extract the name and city properties from the person object in a single line of code?

const person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'Example City',
      country: 'Example Country'
    }
  };
  
  const {name,address:{city}} = person;
  console.log(name,city)
  
  