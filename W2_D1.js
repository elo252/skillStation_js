//Functions
// Function without parameters
function greet() {
    console.log("Hello, World!");
}

greet();

// Function with parameters
function greetPerson(name) {
    console.log(`Hello, ${name}!`);
}

greetPerson("Alice");

// Function with return value
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(`Sum: ${sum}`); 

//RECURSION
// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
console.log(`Factorial: ${result}`); 

//CHAINING

function farewell(name) {
    console.log(`Goodbye, ${name}!`);
}

function formality(name) {
    console.log(`Hello, ${name}!`);
    farewell(name);
}

formality("Alice");


//Arrays
// Creating an array
const fruits = ["Apple", "banana", "cherry"];

// Accessing elements
console.log(fruits[0]);
console.log(fruits[0].toLowerCase()) 

// Modifying elements
fruits[1] = "orange";
console.log(fruits); 

// Array methods
fruits.push("pear"); 
console.log(fruits); 

fruits.pop(); 
console.log(fruits); 

//FUnction with Arrays
function fillArrayWithStars(arr, number) {
    if (number > arr.length) {
        for (let i = arr.length; i < number; i++) {
            arr.push('*');
        }
    } else {
        arr.length = number;
        for (let i = 0; i < number; i++) {
            if (arr[i] === undefined) {
                arr[i] = '*';
            }
        }
    }
    return arr;
}

const filledFruits = fillArrayWithStars(fruits, 5);
console.log(filledFruits);

//Assignemnt GUESS THE WORD



// const words = ["apple", "banana", "cherry", "orange", "grape"];
// const selectedWord = words[Math.floor(Math.random() * words.length)];
// let guessedWord = Array(selectedWord.length).fill('_');
// let attempts = 0;

// function guessLetter(letter) {
//     letter = letter.toLowerCase();
//     attempts++;

//     let correctGuess = false;
//     for (let i = 0; i < selectedWord.length; i++) {
//         if (selectedWord[i] === letter && guessedWord[i] === '_') {
//             guessedWord[i] = letter;
//             correctGuess = true;
//         }
//     }

//     if (correctGuess) {
//         if (guessedWord.join('') === selectedWord) {
//             return `Congratulations! You guessed the word "${selectedWord}" in ${attempts} attempts!`;
//         } else {
//             return `Correct guess! Current word: ${guessedWord.join(' ')}`;
//         }
//     } else {
//         return `Incorrect guess. Current word: ${guessedWord.join(' ')}`;
//     }
// }

// console.log(guessLetter('a'));  // Output: Correct guess! Current word: a _ _ _ _
// console.log(guessLetter('p'));  // Output: Correct guess! Current word: a p p _ _
// console.log(guessLetter('x'));  // Output: Incorrect guess. Current word: a p p _ _
// console.log(guessLetter('l'));  // Output: Correct guess! Current word: a p p l _
// console.log(guessLetter('e'));  // Output: Congratulations! You guessed the word "apple" in 5 attempts!
