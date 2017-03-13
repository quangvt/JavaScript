// JS Nuggets
// Array iteration: 8 methods

// 1. forEach
[1, 2, 3].forEach(function(item, index) {
    console.log(item, index);
});

// 2. map
const three = [1, 2, 3];
const double = three.map(function(item) {
    return item*2;
});
console.log(double);

// 3. filter
const ints = [1, 2, 3];
const evens = ints.filter(
    function (item) {
        return item % 2 === 0;
    });
console.log(evens);

// 4. reduce
const sum = [1, 2, 3].reduce(function(result, item) {
    return result + item;
}, 0);
console.log(sum);

// 5. some
const hostNegativeNumbers = [1, 2, 3, -1, 4].some(function(item) {
    return item < 0;
});

// 6. every
const allPositiveNumbers = [1, 2, -3].every(funtion(item) {
                                            return item > 0;
                                            });

// 7. find
const object = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item){
    return item.id === 'b';
});
console.log(found);

// 8. find index
const object = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.findIndex(function(item){
    return item.id === 'b';
});
console.log(found);
