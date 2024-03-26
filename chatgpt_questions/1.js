// You have an array of objects representing students, each with name and grades properties. Each student's grades are stored as an array of numbers. Write a JavaScript function that takes an array of students and calculates the average grade for each student. The function should return an array of objects, where each object contains the name of the student and their calculated averageGrade.


const students = [
    { name: 'Alice', grades: [80, 90, 75] },
    { name: 'Bob', grades: [95, 87, 92] },
    { name: 'Charlie', grades: [88, 91, 78] },
  ];
  
  // const averageGrades = students.reduce((acc,crr) =>{
  //     return acc+crr.grades[0]/crr.grades.length
  // })
  
  // console.log(averageGrades);
  
  const calculateAverage = (item) => {
    const sum = item.reduce((acc, grade) => {
        
      return  acc + grade
        
    },0);
    
    return sum / grades.length;
  };
  
  const average = calculateAverage(students.grades);
  
  console.log(average);
  
  // const result = calculateAverage(students.grades);
  // console.log(result)
  