const array1 = ["item1", "item2", "item3"];

const array2 = [...array1];

//First array
const bodyParts = ["head", "hair", "neck", "shoulder", "arm", "ear"];

//Second array
const clothes = ["t-shirt", "dress", "scarf", "blouse", "skirt", "sweater"];

//Printing the first arrays
console.log("Imprimiendo los arrelos originales \n");
console.log(bodyParts);
console.log(clothes);
console.log("\n------------------\n");

//Clone for bodyParts array
const partsCopy = bodyParts;

//Printing the cloned arrays
console.log("Arreglo original");
console.log(bodyParts);

console.log("\n Arreglo copiado");
console.log(partsCopy);

console.log("\n------------------\n");

//Modify the original array
bodyParts.push("eye");

//Printing the modified array
console.log("\n Arreglo original modificado");
console.log(bodyParts);

console.log("Arreglo copiado");
console.log(partsCopy);

console.log("\n------------------\n");

//Clone for clothes array with spread
const clothesCopy = [...clothes];

//Modify the original array
clothes.push("shorts");

//Printing the modified and copied array
console.log("Arreglo original modificado");
console.log(clothes);

console.log("\n Arreglo copiado con spread");
console.log(clothesCopy);

console.log("\n------------------\n");

//Concat bodyParts array and clothes array
const concatArrays = [...bodyParts, ...clothes];

//Concat bodyParts array and clothes array with spread
console.log("Concatenando arreglos");
console.log(concatArrays);

console.log("\n------------------\n");

//Concat bodyParts array, clothes array and add new elements
const newElements = [...bodyParts, ...clothes, "jacket", "hat"];

//Concat bodyParts array, clothes array and add new elements with spread
console.log("Concatenando arreglos");
console.log(newElements);

console.log("\n------------------\n");