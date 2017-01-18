// Wherefore Art Thou

/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and value
pair (second argument). Each property and value pair of the source object
has to be present in the object from the collection if it is to be included
in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" }, then you must return the
third object from the array (the first argument), because it contains the
property and its value, that was passed on as the second argument.
*/

function whatInAName(collection, source) {
  var keys = Object.keys(source);
  
  return collection.filter(function(obj){
    return keys.map(function(key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a, b){
      return a&&b;
    });
  });
  
  /*
  return collection.filter(obj => {
    return keys.map(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];    
    }).reduce((a, b) => {return a&&b;});
  });
  */
}
