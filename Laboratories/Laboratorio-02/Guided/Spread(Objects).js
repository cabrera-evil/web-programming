// Objects to use
const firstObject = {
    name: "Jose Eduardo",
    birthday: "17/09/2002",
    nationality: "Salvadoran",
    age: 20,
    parents: [
        { name: "Josefina", lastname: "Mendoza" },
        { name: "Pedro", lastaname: "Gonzales" },
    ],
};  

const secondObject = {
    occupation: "Student",
    eduactionLevel: "University",
    university: "Universidad centroamericana José Simeón Cañas",
    hobbies: ["Soccer", "VideoGames", "Guitar", "Math"],
};

//Printing objects
console.log("----Objetos a utilizar---- \n");
console.log(firstObject, "\n");
console.log(secondObject);

console.log("\n------------------\n");

// Clone an object
const objectClone = { ...firstObject };

// Modify a property of firstObject
firstObject.name = "Jose Jose";

//Printing cloned object
console.log("Clonando objetos \n");
console.log("Objeto clon: \n");
console.log(objectClone);
console.log("\nObjeto modificado: \n");
console.log(firstObject);

console.log("\n------------------\n");

// Concat objects
const concatObject = { ...firstObject, ...secondObject };

//Printing concatenated object
console.log("Concatenando objetos \n");
console.log(concatObject);

console.log("\n------------------\n");

// Concat and add new properties
const propertiesObject = {
    favoriteColor: "Blue",
    cars: 1,
    ...firstObject,
    ...secondObject,
};

//Printing concatenated object and properties
console.log("Concatenando objetos y propiedades \n");
console.log(propertiesObject);

console.log("\n------------------\n");

// Rest parameter in functions
function sumNumbers(...numbers){
    const sum = numbers.reduce((prev, value) => {
        return prev + value;
    }, 0);
    //Printing sum result
    console.log(`La suma es ${sum}\n`);
}

console.log("Spread como Rest Parameter \n");
console.log("\nEnviando 3 números \n");
sumNumbers(1, 2, 3);
console.log("\nEnviando 5 números \n");
sumNumbers(1, 2, 3, 4, 5);
console.log("\nEnviando 7 números \n");
sumNumbers(1, 2, 3, 4, 5, 6, 7);

console.log("------------------\n");

function multiplyNumbers(a, b, c){
    const mult = a * b * c;
    console.log(`La multiplicación es ${mult}\n`);
}

//Creating the function arguments
let args = [2, 4, 6];

//Printing multiplication result
console.log("Spread como argumentos de una función \n");
console.log("\nEnviando 3 números como argumentos \n");
multiplyNumbers(...args);

// Sending 5 numbers as argument
args = [2, 4, 6, 8, 10];
console.log("\nEnviando 5 números como argumentos \n");
multiplyNumbers(...args);

console.log("------------------\n");