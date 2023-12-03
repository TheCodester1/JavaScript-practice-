
// // variables
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

let person = {
    //primitives/value types
    name: 'Mosh', //String Literal
    age: 30, //Number Literal
};


person.name = "John";
console.log(person.name);

person['name'] = 'Mary';
console.log(person.name);

//array literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//functions
//perferforming a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//calculating a value 
function square(number) {
    return number * number;
}

greet('John', 'Smith');
greet('Mary', 'Mathews');

console.log(square(2))

let age = 5

while (age < 10) {
    console.log("Your age is less than 10");
}