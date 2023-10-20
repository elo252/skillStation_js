//Conditional

// let age = 18;

// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age < 60) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior citizen.");
// }

// let age = 25;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//     console.log("You are an adult with a valid license.");
// } else {
//     console.log("You are either not an adult or don't have a valid license.");
// }

// let isWeekend = false;
// let isHoliday = true;

// if (isWeekend || isHoliday) {
//     console.log("It's time to relax and enjoy!");
// } else {
//     console.log("You have work to do.");
// }




const userAction = "rock";
const possibleActions = ["rock", "paper", "scissors"];
const computerAction = possibleActions[Math.floor(Math.random() * possibleActions.length)];

console.log(`You chose ${userAction}, computer chose ${computerAction}.\n`);

if (userAction === computerAction) {
    console.log(`Both players selected ${userAction}. It's a tie!`);
} else if (userAction === "rock") {
    if (computerAction === "scissors") {
        console.log("Rock smashes scissors! You win!");
    } else {
        console.log("Paper covers rock! You lose.");
    }
} else if (userAction === "paper") {
    if (computerAction === "rock") {
        console.log("Paper covers rock! You win!");
    } else {
        console.log("Scissors cuts paper! You lose.");
    }
} else if (userAction === "scissors") {
    if (computerAction === "paper") {
        console.log("Scissors cuts paper! You win!");
    } else {
        console.log("Rock smashes scissors! You lose.");
    }
} else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
}



const numbers = [1, 2, 3, 4, 5];

// Using For Loop
console.log("Using For Loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using While Loop
console.log("\nUsing While Loop:");
let count = 0;
while (count < numbers.length) {
    console.log(numbers[count]);
    count++;
}

// Using forEach Loop Clearer explanation after arrow function
console.log("\nUsing forEach Loop:");
numbers.forEach(number => {
    console.log(number);
});


