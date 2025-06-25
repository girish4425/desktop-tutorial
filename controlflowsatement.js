let age = 18;
if (age < 18) {
    console.log("you are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("you are an adult.");
}
else {
    console.log("you are a senior citizen.");    
}
console.log("\n");


// Example of switch statement

let day = (5);
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");     
}

// 2. loops
// Example for 'for' loop

for(let i = 0; i < 5; i++) {
    console.log("Iteration");
}

//add new line
console.log("\n");

//example of 'while' loop
let j = 0;
while (j < 5) {
    console.log("while Loop iteration:", j);
    j++;
}

console.log("\n");
//Example of 'do...while' loop
let k = 0;
do {
    console.log("Do...while loop iteration:", k);
    k++;
}while (k < 5);
