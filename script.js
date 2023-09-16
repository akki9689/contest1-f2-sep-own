const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "rohit", age: 22, profession: "developer" },
  { name: "rakesh", age: 29, profession: "developer" },
  { name: "suresh", age: 24, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  //iteration on array data
   for(let i=0;i<data.length;i++){
    //finding developers
    if(data[i]["profession"]=="developer"){
      console.log(data[i]["name"]) //printing name of devop's
    }
   }
}

// 2. Add Data
function addData() {
  //prompt details
  const name = prompt('Enter a name:');
  const age = parseInt(prompt('Enter an age:'));
  const profession = prompt('Enter a profession:');
//creating new obj to push in data
  const newData = {
    name: name,
    age: age,
    profession: profession,
  };
  //pushing new prompt details in data Array
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  const admins = [];

  // Iterate through the data array and filter out admin objects
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession === 'admin') {
      admins.push(data[i]);
      // Remove the admin object from the original array
      data.splice(i, 1);
      i--; // Decrement i to account for the removed element
    }
  }
  console.log(data);
}


// 4. Concatenate Array
function concatenateArray() {
  //two array for example
  let  arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  //conactenation of arr1 and arr2
  let conArray=arr1.concat(arr2); //using inbuilt method concat
  console.log(conArray);


}

// 5. Average Age
function averageAge() {
  let count=0;
  let sum=0;
  //iterating on array
  for(let i=0;i<data.length;i++){
    //addition of ages
    sum+=data[i]["age"];
    //count of ages
    count++;

  }
  //printing avg
  console.log("Average is:"+sum/count);
}

// 6. Age Check
function checkAgeAbove25() {
  // let istrue=false;
  let count=0;
  for(let i=0;i<data.length;i++){
   if(data[i]["age"]>25){
     count++;
   }
  }
  if (count>=1) {
    console.log('There is at least one person above 25.');
  } else {
    console.log('There is no person above 25.');
  }
  
}

// 7. Unique Professions
function uniqueProfessions() {
  
    // Create an empty set to store unique professions
    const uniqueProfessionSet = new Set();
  
    // Iterate through the dataArray and add professions to the set
    data.forEach(person => {
      if (person.profession) {
        uniqueProfessionSet.add(person.profession);
      }
    });
  
    // Convert the set back to an array
    const uniqueProfessionsArray = Array.from(uniqueProfessionSet);
  
    // Log the unique professions
    console.log('Unique Professions:', uniqueProfessionsArray);
  }
  
  
  
  
 


// 8. Sort by Age
function sortByAge() {
  
  let x=data.sort((a, b) => a.age - b.age);
  console.log(x);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnIndex = data.findIndex(person => person.name === 'john');

  // Check if 'John' was found in the array
  if (johnIndex !== -1) {
    // Update John's profession to 'manager'
    data[johnIndex].profession = 'manager';
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
   // Initialize counters for developers and admins
   let developers = 0;
   let admins = 0;
 
   // Iterate through the dataArray to count developers and admins
   data.forEach(person => {
     if (person.profession === 'developer') {
       developers++;
     } else if (person.profession === 'admin') {
       admins++;
     }
   });
   console.log('There are:', developers +" Developers");
   console.log('There are:',admins +" Admins");
}
