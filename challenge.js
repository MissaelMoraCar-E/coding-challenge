/**
 * Add an object for yourself following a similar format. Put each object in 
   an array so you have an array of objects (your choice how to do that). 

   Iterate through the array of objects adding the date the script was run 
   to each object as favorite things may change in the future. 
   
   Console.log only active records with the Name, date, Favorite movie of each person. 
   Add a function that can sort the output by object property. 
   
   There may be a time where no Active records are found. 
   
   Include code that provides a message when that occurs.
 */

   /**
    * Missael Eduardo Navarro Mora
    * Fri, Jan 7th 2022
    * Purpose: coding challenge & have a great job
    */

   let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
}
  let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
}
  let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
}
  let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
}
  let missaObj = {
      'Name': 'Missael',
      'Favorite Food': 'Rib eye',
      'Favorite Movie': 'Avengers: Infinity War',
      'Status': 'Active'
}
    
//create & push items to an array
const arrayOfPersons = []
arrayOfPersons.push(rockyObj,miroslavObj,donnyObj,mattObj,missaObj)

//Adding date to each object
let date = new Date()
for(index = 0; index < arrayOfPersons.length; index++){
    arrayOfPersons[index].lastModified = date
}

//verify if person is active of inactive
var inactivePersons = []
arrayOfPersons.forEach(element => {
    if(element.Status === "Active"){
        //call function to print
        printPerson(element) 
    } else {
        //save inactive persons
        inactivePersons.push(element.Name)
    }
});

function printPerson (element) {
    //concat person properties
    console.log("Name: " + element.Name + " Date: " + element.lastModified 
    + " Favorite Movie: " + element["Favorite Movie"])
}

console.log("The following persons are inactive: " + inactivePersons)