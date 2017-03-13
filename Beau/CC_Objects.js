// Clean Code: Objects and Data Structures


// 1. Use getters and setters
// BAD
function makeBankAccount() {
    //...
    return {
        balance: 0,
        // ...
    };
}
const account = makeBankAccount();
account.balance = 100;
console.log(account.balance);//100

// GOOD
function makeBankAccount() {
    let balance = 0;
    
    function getBalance() {
        return balance;
    }
    
    function setBalance() {
        balance = amount;
    }
    
    return {
        getBalance,
        setBalance 
    }
}

const account = makeBankAccount();
account.setBalance(100);
account.getBalance(); //100

// 2. Make objects have private members
// BAD
const Employee = function(name) {
    this.name = name;
};

Employee.prototype.getName = function getName() {
    return this.name;
};

const employee = new Employee('John Doe');
// console.log('Employee name: ${employee.getName}'); // "John Doe"
delete employee.name;
// console.log('Employee name: ${employee.getName()}'); // undefined

// GOOD
const Employee = function(name) {
    return {
        getName() {
            return name;
        },
    };
};

const employee = new Employee('John Doe');
// console.log('Employee name: ${employee.getName}'); // "John Doe"
delete employee.name;
// console.log('Employee name: ${employee.getName()}'); // "John Doe"
 