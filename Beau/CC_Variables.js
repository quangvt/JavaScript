// Clean Code: variables

// Use meaningful and pronounceable variable names
var yyyymmdstr = moment().format('YYYY/MM/DD');
=> var yearMonthDay

// Use ES6 constants when variable values do not change
var FIRST_US_PRESIDENT = "George Washington";
=> const FIRST...

// Use the same vocabulary for the same type of variable
getUserInfo();
getClientData();
getCustomerRecord();
=> getUser();

// Use serachable names
for(var i = 0; i < 525600; i++) {
    runCronJob();
}
=> var MINUTES_IN_A_YEAR = 525600
... i < MINUTES_IN_A_YEAR

// Use explanatory variables
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
saveCityState(cityStateRegex.match(cityStateRegex[1], cityStateRegex.match(cityStateRegex[2])));
=> 
const match = cityStateRegex.match(cityStateRegex);
const city = match[1];
const state = match[2];
saveCityState(city, state);

// Don't add uneeded context
var Car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
};

function paintCar(car) {
    car.carColor = 'Red';
}
=> var Car = {
    make: ...,
    model: ...,
    color: ...
}

// Short-circuiting is cleaner than conditionals
function createMicrobrewery(name) {
    var breweryName;
    if (name) {
        breweryName = name;
    } else {
        breweryName = 'Hipster Brew Co.';
    }
}
'=> '
function create...(name) {
    var breweryName = name || 'Hipster Brew Co.';
}