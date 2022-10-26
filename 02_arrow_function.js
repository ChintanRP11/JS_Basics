// Arrow function is shorter version to express a function. BUT some properties and behaviour is different inside an arrow function.

// regular function expression
console.log("Regular Funciton: ");
let x = function(x, y) {
    return x * y;
}
console.log(x(3,20));

// above function as an arrow function
// syntax: let/const <function_name> = (arg1, arg2, arg3) => { statement(s) }
// if it is a single statement function it can be written as.... (we can omit brackets and return keyword)
console.log("Arrow Function: ");
let a = (a,b) => a*b;
console.log(a(4,5));

console.log("Multiline Arrow Function: ");
// multiline...
let sum = (a, b) => {
    let result = a + b;
    return result;
}
let result1 = sum(5,7);
console.log(result1);

console.log("Arrow function without arguments: ");
// without arguments..
let g = () => console.log("Hello");
g();

console.log("Arrow function with one argument: ");
// with one argument (we can omit parenthesis)...
let h = name => console.log(name);
h('User1');

console.log("Arrow function with argument as expression: ");
// argument as an expression...
let grade = 75;
let result = (grade > 60) ? () => console.log("Pass"): () => console.log("Fail")
result();


console.log("this keyword in regular function: ");
// this keyword with arrow function.
// in regular functions this refers to its own scope where it is called.
// while with arrow function this refers to its parent scope.

// this in regular function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age);
        console.log(this);

        function innerFunc() {
            // here this refers to the global object
            console.log(this.age); // undefined
            // console.log(this);
        }
        innerFunc();
    }
}
let p2 = new Person();
p2.sayName();


// arrow function
console.log("this keyword in arrow function: ");
function Person2() {
    this.name = 'Jackie',
    this.age = 35,
    this.sayName = function () {
        console.log(this.age);
        console.log(this);
        let innerFunc = () => {
            // here this refers to its parent (Person2's object).
            console.log(this.age);
        }

        innerFunc();
    }
}

const x2 = new Person2();
x2.sayName();



// Argument Bindings
// regular functions have argument binding...
console.log("argument binding in regular function: ");
let arg = function () {
    // logs the argument of this function
    console.log(arguments);
}
arg(4,6,7);

// arrow function does not have argument binding...
console.log("argument binding cannot done in arrow function: ");
let ar = () => console.log(arguments);
// ar(4,6,7);

// BUT argument binding inside arrow function can be done by spread operator.

