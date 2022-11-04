const person = {
    name: 'abc',
    age: 23,
    greet() {
        console.log('Hello ', this.name)
    }
}

const printName = (p1) => {
    console.log(p1.name);
}

// destructuring => specifying specific property of incoming object. Only that property can be accessible another is not accessible.
const printN = ({name}) => {
    console.log(name);
}

printName(person);
printN(person);


// in array destructuring works on indexes.
const hobbies = ["Singing", "Reading", "Cooking"];
const [hb1, hb2] = hobbies;     // it extracts only first two elements of array
console.log(hb1, hb2);
