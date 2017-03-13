// Clean Code: Function (part1)

// Function arguments (2 or fewer ideally)
function createMenu(title, body, buttonText, cancellable) {
    // ...
}
// =>
const menuString = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
};

function createMenu(menuString){}

// Function should do one thing
function emailClients(clients) {
    clients.forEach((client) => {
        const clientRecord = database.lookup(client);
        if(client.Record.isActive()) {
            email(client);
        }
    });
}
// =>
function emailClients(clients) {
    clients
        .filter(isClientActive)
        .forEach(email);
}

function isClientActive(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

// Function names should say what they do
function addToDate(date, month) {
    // ...
}

// => 
function addMonthToDate(month, date) {
    // ...
}

const date = new Date();
addMonthToDate(1, date);

// Functions should only be one level of abstraction
function parseBetterJSAlternative(code) {
    const REGEXES = [
        // ...
    ];
    
    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
        statement.forEach((statement) => {
            // ...
        });
    });
    
    const ast = [];
    takens.forEach((token) => {
        // 
    })
    // ....
}

// =>
function tokenize(code) {
    const REGEXES = [
        // ...
    ];
    
    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
        statements.forEach((statement) => {
            tokens.push( /*...*/ );
        });
    });
    
    return tokens;
}

function lexer(tokens) {
    const ast = [];
    tokens.forEach((token) => {
        ast.push(/*...*/);
    });
    return ast;
}

function parseBetterJSAlternative(code) {
    const tokens = tokenize(code);
    const ast = lexer(tokens);
    ast.forEach((node) => {
        // parse...
    });
}

// Remove duplicate code
function showDevelopmentList(developers) {
    developers.forEach((developer) => {
        const expectedSalary = developer.calculateExpectedSalary();
        const experience = developer.getExperience();
        const githubLink = developer.getGithubLink();
        const data = {
            expectedSalary,
            experience,
            githubLink
        };
        
        render(data);
    });
}

function showManagerList(managers) {
    managers.forEach((manager) => {
        const expectedSalary = manager.calculateExpectedSalary();
        const experience = manager.getExperience();
        const porfolio = manager.getMBAProjects();
        const data = {
            expectedSalary,
            experience,
            portfolio
        };
    });
    
    render(data);
}
// =>
function showList(employee) {
    developers.forEach((employee) => {
        const expectedSalary = employee.calculateExpectedSalary();
        const experience = employee.getExperience();
        let portfolio = employee.getGithubLink();
        
        if (employee.type === 'manager'){
           portfolio = employee.getMBAProjects(); 
        }
        
        const data = {
            expectedSalary,
            experience,
            portfolio
        };
        
        render(data);
    });
}

// Don't use flags as function parameters
function createFile(name, temp) {
    if (temp) {
        fs.create('./temp/${name}');
    } else {
        fs.create(name);
    }
}

// =>
function createFile(name) {
    fs.create('./temp/${name}');
}

function createTempFile(name) {
      fs.create(name);
}