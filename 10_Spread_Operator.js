// js object
const person = {
    name: 'abc',
    age: 23,
    greet() {
        console.log('Hello ', this.name)
    }
}
console.log(person);

// extracting the person object into p1 with another js entry. p1 has person property with person object in it.
const p1 = {person};
console.log(p1);

// spread operator
// its copies person object into sp1. sp1 is same as person object.
const sp1 = {...person};
console.log(sp1);


// Same concept in array
const hobbies = ["Singing", "Reading", "Cooking"];
const h1 = [hobbies];   // array inside array
const h3 = [...hobbies]; //h3 is same array as hobbies

console.log(h1);
console.log(h3);


//rest operator: using it to merge all elements in one argument.
const toarr = (...args) => {
    return args;
}

console.log(toarr(...hobbies));
console.log(toarr(hobbies));