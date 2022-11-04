let taskAPI = "https://www.boredapi.com/api/activity"
let joke = "https://official-joke-api.appspot.com/random_joke";


// // here this 3 will run parallel and executes as it finished.
// tandj(5)
// .then(results => console.log(results))
// .catch(err => console.error(err));

// tandj(11)
// .then(results => console.log(results))
// .catch(err => console.error(err));

// tandj(98)
// .then(results => console.log(results))
// .catch(err => console.error(err));

// To handle execution one after another then promise.all() can be useful.
let promises = [tandj(5), tandj(11), tandj(98)]

// this take array as argument wait until all are done.
// once all three functions in array completed then it moves to then() part.
Promise.all(promises)
.then(results => {
    for(let i=0; i<results.length; i++){
        console.log(results[i])
    }
})
.catch(err => console.error(err));


async function tandj(num) {

    let res = await fetch(taskAPI);
    let resjs = await res.json();   
    let res2 = await fetch(joke);
    let js2 = await res2.json();

    return {
        Id: num,
        task: resjs.activity,
        joke: {Setup: js2.setup, Punchline: js2.punchline}
    }
}

