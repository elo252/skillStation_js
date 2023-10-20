//Arrow Functions

// function greetPerson(name) {
//     console.log(`Hello, ${name}!`);
// }


// Function without parameters (Arrow Function)
const greet = () => {
    console.log("Hello, World!");
};

greet();

// Function with parameters (Arrow Function)
const greetPerson = (name) => {
    console.log(`Hello, ${name}!`);
};

greetPerson("Alice");

// Function with return value (Arrow Function)
const add = (a, b) => a + b;

const sum = add(5, 3);
console.log(`Sum: ${sum}`);

// Recursive function to calculate factorial (Arrow Function)
const factorial = (n) => (n === 0 || n === 1) ? 1 : n * factorial(n - 1);

const result = factorial(5);
console.log(`Factorial: ${result}`);

// Chaining Functions (Arrow Functions)
const farewell = (name) => {
    console.log(`Goodbye, ${name}!`);
};

const formality = (name) => {
    console.log(`Hello, ${name}!`);
    farewell(name);
};

formality("Alice");


//Objects
// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

// Accessing properties
console.log("First Name:", person.firstName); // Output: First Name: John
console.log("Age:", person["age"]); // Output: Age: 30

// Modifying properties
person.age = 31;
person["address"]["city"] = "New City";

// Adding new properties
person.gender = "Male";
person["isStudent"] = false;

// Accessing nested properties
console.log("Street:", person.address.street); // Output: Street: 123 Main St

// Deleting properties
delete person.address; // Deletes the address property
delete person["isStudent"];

// Checking if a property exists
if ("firstName" in person) {
    console.log("First Name exists in person object.");
}

// Iterating over object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

/*
Output:
firstName: John
lastName: Doe
age: 31
gender: Male
*/

// Object methods & explaining "THIS"
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    getInfo: function() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
};

console.log(car.getInfo()); 
