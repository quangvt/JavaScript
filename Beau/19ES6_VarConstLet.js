// JS Nuggets: Const vs Let vs Var

// const
const Pi = 3.14;
Pi = 1; // Error

// let (=> block level variable)
// Case 1
console.log(i); // error

for (let i = 0; i < 3; i++) {
    console.log(i); // 1 1 0 1 2 1
}

console.log(i); // error

// var
console.log(j); // undefined => not error (hoisting): existed but not has not assigned yet
for(var j = 0; j < 3; j++) {
    console.log(j); // 0 1 2
}
console.log(j); // 3
