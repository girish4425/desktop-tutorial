let a = 10;
let b = 20;
console.log("Arithmetic Operators:");
console.log("a =", a, ", b =", b);
let sum = a + b;
let difference = a- b;
let product = a *b;
let quotient = a / b;
let remainder = a % b;
let exponent = a ** b;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);

// 2.Assigment operatiors

let x = 10;
x += 5;
x -= 3;
x *= 2
x /= 4;
x %= 3;
console.log("Assignment operators:");
console.log("x after assignments:", x);
console.log("\n");

// 3. comparison operators
let isEqual = (a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comparision Operators:");
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Strict Not Equal:", isStrictNotEqual);
console.log("Is Greater Than:", isGreaterThan);
console.log("Is Less Than:", isLessThan);
console.log("Is Greater Than Or Equal:", isGreaterThanOrEqual);
console.log("Is Less Than POr Equal:", isLessThanOrEqual);

// 4. Logical operators

let andOperator = (a > 0 && b > 0);
let orOperator = (a > 0 || b > 0);
let notOperator = (a < b);
console.log("Logical Operators:");
console.log("AND Operator:", andOperator);
console.log("OR Operator:", orOperator);
console.log("NOT Operator:", notOperator);
console.log("\n");

//5.Bitwise Operator

let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a << b;
let rightShit = a >> b;
console.log("Bitwise Operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:", bitwiseOr);
console.log("Bitwise XOR:", bitwiseXor);
console.log("Bitwise NOT:", bitwiseNot);
console.log("LEFTSHIFT:", leftShift);
console.log("RIGHTSHIFT:", rightShit);
console.log("\n");

// 6. Ternarv operator

let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not Eligible to vote";
console.log("Ternary operator:");
console.log("Eligibility:", eligibility);
console.log("\n");

// 7. typeof operator

let variableType = typeof a;
console.log("Typeof operator:");
console.log("Type of variable 'a':", variableType);
console.log("\n");
