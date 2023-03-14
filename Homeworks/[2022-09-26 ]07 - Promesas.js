//Legacy
const divPromise = (a, b) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Calculating ${a} / ${b}`);

      if (b == 0) {
        reject(new Error("Error: Div between 0"));
      } else {
        resolve(a / b);
      }

    }, 3000);
  });

}

const divAsync = async (a, b) => {
  if(b === 0) {
    throw new Error("Error: Div between 0");
  } else {
    return a / b;
  }
}

console.log("------ After the promise ------");

const main = async () => {
  const numbersArr = [1, 3, 5, 4, 8, 0];
  let acc = numbersArr[0];

  numbersArr.forEach(async (number) => {
    try{
      acc = await divAsync(acc, number);
      console.log(`The result is: ${acc}`);
    } catch{
      console.error("Error: Div between 0");
    }
  })
}

main();