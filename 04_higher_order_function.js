// // function woth 0 argument.
// function start() {
//     console.log("Car is started");
// }

// function with another function (callback) as an argument.
function start(callback) {
    console.log("Car is started");
    // if callback is not passed during function call then it will not run that callback.
    if (callback) {
        callback();
    }
}

function accelerate() {
    console.log("Speeding up...");
}

function decelerate() {
    console.log("Speed is decreasing...");
}

start();
start(accelerate);
start(decelerate);


// function (callback) is as return of another function.
// function multiplier(factor) {
//     return function(x) {
//         return x*factor;
//     }
// }

// shortening above function using arrow....
// function multiplier(factor) {
//     return (x) => x*factor;
// }

// shortening above function using arrow....
multiplier = (factor) => (x) => x*factor ;


// here doubler is a function which is returned from multiplier function.
let doubler = multiplier(2);
let tripler = multiplier(3);
console.log(doubler);
console.log(doubler(10));
console.log(tripler(10));




