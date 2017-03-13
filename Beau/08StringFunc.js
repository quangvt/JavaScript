// 08 Youtube Lesson
// 20 String Methods

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development!"

// 1. charAt()
console.log(stringOne.charAt(1)); // "r"

// 2. charCodeAt()
console.log(stringOne.charCodeAt(1)); // 114

// 3. concat()
console.log(stringOne.concat(stringTwo)); // ...

// 4. endsWith()
console.log(stringOne.endsWith("learn")); // true

// 5. fromCharCode()
console.log(String.fromCharCode(114)); // "r"

// 6. includes()
console.log(stringOne.includes("end")); // true

// 7. indexOf()
console.log(stringOne.indexOf("end")); // 5

// 8. lastIndexOf()
console.log(stringOne.lastIndexOf("end")); 

// 9. match()
console.log(stringTwo.match(/end/g)); // ["end", "end"]

// 10. repeat()
console.log(stringOne.repeat(3));

// 11. replace()
console.log(stringTwo.replace(/end/g, "END"));

// 12. search()
console.log(stringTwo.seach("end")); // 5

// 13. slice()
console.log(sstringTwo.slice(2, 4)); // "on"

// 14. split()
console.log(stringOne.split(" ")); //

// 15. startsWith()
...

// 16. substr()
console.log(stringTwo.substr(2, 4)); // "onte"

// 17. substring()
console.log(stringTwo.substring(2, 4)); // "on"

// 18. toLowerCase()
...

// 19. toUpperCase()
...

// 20. trim()
...
