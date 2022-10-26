// var => function/global/local scope depends on its declaration.
// declared within function => function scope.
// declared outside function => global scope.
// can be re-declared and updated.
function vartest() {
    // here this console prints the undefined because var is function scope.
    // So, declaration of var anywhere in this function makes it available for whole function.
    console.log(x);
    var x = 100;
    console.log(x);
    var total = 0;
    for (var j =0; j< 5; j++){
        total += j;
    }
    console.log(j);
    console.log(total);
}
console.log("VAR Test:");
vartest();

// during interpretetion above code is interpreted as ....
function vartestInterpret() {
    var x, total, j; // all are intialized(with undefined) at the top of the scope => hoisting.
    console.log(x);
    x = 100;
    console.log(x);
    total = 0;
    for (j =0; j< 5; j++){
        total += j;
    }
    console.log(j);
    console.log(total);
}
console.log("VAR Interpretation:");
vartestInterpret() // behave same as above funciton.


// let => block scope
// can be updated but not re-declared
function lettest() {
    // here this first console gives error because x is not initialized.
    // So, let makes it available after its declaration and it is block scope.
    // console.log(x); //it gives error
    let x = 100;
    console.log(x);
    let sum = 0;

    // for the loop 'for' i is declared in loop scope so i is only available within loop.
    for (let i = 0; i < 5; i++){
        sum += i;
    }
    // console.log(i); // it gives an error because i is used outside its block scope.
    console.log(sum);
}
console.log("LET Test:");
lettest();


// Here is the actual problem using the var.
// var i used in both for loops but only one i exist for both loops and second loop is changing i to 2 and length will be 3 so, condition for first loop will be wrong and execution ends.
function varProblem() {
    matrix = [[1,2,3], [4,5,6], [7,8,9]]
    for (var i = 0; i < matrix.length; i++) {
        var line = matrix[i];
        for (var i = 0; i < line.length; i++) {
          var element = line[i];
          console.log(element);
        }
    }
}
console.log("Problem using VAR:");
varProblem()

// let solves this problem as it is block scope.
// For second and first loop both i are totally different and independent from each other.
function letSolution() {
    matrix = [[1,2,3], [4,5,6], [7,8,9]]
    for (let i = 0; i < matrix.length; i++) {
        const line = matrix[i];
        for (let i = 0; i < line.length; i++) {
          let element = line[i];
          console.log(element);
        }
    }
}
console.log("LET solves the problem in VAR: ");
letSolution()
