delay(1000)
.then(()=>console.log("Hello"))
.catch(err => console.error(err));


// here, this function returns a Promise with resolve and reject.
// if this function resolves then it executes the then block and if reject, it executes catch block with generated error.
function delay(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject(new Error("delay requires a number"));
        } else {
            setTimeout(resolve, time);
        }
    });
}