let taskAPI = "https://www.boredapi.com/api/activity"
// let joke = "https://official-joke-api.appspot.com/random_joke";
let joke = "https://fficial-joke-api.appspot.com/random_joke";

// try catch is used to check for error in code written inside try block.
// if any code which might not generates data every time then we can use try and catch.

tandj()
.then(results => console.log(results))
.catch(err => console.error(err));

async function tandj() {

    try {
        let res = await fetch(taskAPI);
        let resjs = await res.json();   
        let res2 = await fetch(joke);
        let js2 = await res2.json();
    } catch(err) {
        return new Error("Something wrong.");
    }

    return {
        task: resjs.activity,
        joke: {Setup: js2.setup, Punchline: js2.punchline}
    }
}

