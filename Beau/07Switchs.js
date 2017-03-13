// 07 Youtube lesson
// JS Nuggets: Switch Statements
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

var animal = 'Giraffe';
switch(animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal will go on Noah\'s Ark.');
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
    default:
        console.log('This animal will not be on the Ark.');
}