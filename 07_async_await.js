let taskAPI = "https://www.boredapi.com/api/activity"
let joke = "https://official-joke-api.appspot.com/random_joke";


// converting this code into async/await structure.
// fetch(taskAPI)
// .then(data => data.json())
// .then(json => {
//     console.log("Task: ",json.activity);
//     return fetch(joke);
// })
// .then(data => data.json())
// .then(json => console.log(json.setup, json.punchline))
// .catch(err => console.error(err))

tandj()
.then(results => console.log(results))
.catch(err => console.error(err));

// await can be used only for async functions.
// this function is async and some functions which can take time to return data are used along with await keyword.
// it means it waits until it returns data.
async function tandj() {

    let res = await fetch(taskAPI);
    let resjs = await res.json();   
    let res2 = await fetch(joke);
    let js2 = await res2.json();

    // above lines also can be written as 
    // let resjs = await (await fetch(taskAPI)).json();

    return {
        task: resjs.activity,
        joke: {Setup: js2.setup, Punchline: js2.punchline}
    }
}

