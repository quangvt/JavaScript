// Profile Lookup 
/*
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes firstName and a property (prop) as arguments has been
 pre-written for you.
The function should check if firstName is an actual contact's firstName and the given
 property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If firstName does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties then return "No such property"
*/
=========================================================================================
// Code
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var isExistFN = false;
  var pos = -1;
  for (var i = 0; i < contacts.length; i ++){  
    //return contacts[i].firstName === firstName; 
    if (contacts[i].firstName === firstName){
      isExistFN = true;
      pos = i;
      break;
    }
    
  }
  
  // Error message if firstName is not existed
  if (!isExistFN){
    return "No such contact";  
  }
  
 
  // Error message if contact does not have prop
  if (!contacts[pos].hasOwnProperty(prop)){
    return "No such property";
  }
  
  // Normal
  return contacts[pos][prop];  

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
