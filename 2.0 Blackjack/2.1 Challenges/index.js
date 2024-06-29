// Create a person object containing 3 keys: name, age, and country

let person = {
    name: "Mason",
    age: 41,
    country: "USA"
}

// Create a function logData() that uses the person object to create a
// string in the following format:
// "Mason is 41 years old and lives in USA"

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".")
}

//Call the logData() function to verify it works

logData();
