const pokemon = [
    {
      name: "Pikachu",
      type: "electric",
      attackPoints: 55,
      defensePoints: 40,
    },
    {
      name: "Bulbasaur",
      type: "grass",
      attackPoints: 49,
      defensePoints: 49,
    },
    {
      name: "Charmander",
      type: "fire",
      attackPoints: 52,
      defensePoints: 43,
    },
    {
      name: "Squirtle",
      type: "water",
      attackPoints: 48,
      defensePoints: 65,
    },
  ];

//1-Find the pokemon of type fire
const filteredType = pokemon.filter((item) => {
  return item.type == "fire";
});

//Printing the filter array
console.log("Using filter for fire type: \n");
console.log(filteredType);

console.log("\n------------------\n");

//2-Using only the first two pokemon
const firstTwo = pokemon.slice(0,2);

//Printing the filter array
console.log("Using slice for first two: \n");
console.log(firstTwo);

console.log("\n------------------\n");

//3-Adding a pokemon in the second space of array
const newPokemon = {
  name: "Mewtwo",
  type: "psychic",
  attackPoints: 110,
  defensePoints: 90,
};

pokemon.splice(1,0,newPokemon);

//Printing the filtered array
console.log("Using splice for adding a new pokemon: \n");
console.log(pokemon);

console.log("\n------------------\n");

//4-Removing the first pokemon
const removeFirst = pokemon.slice(1 ,5);

//Printing the filtered array
console.log("Using slice for removing the first pokemon: \n");
console.log(removeFirst);

console.log("\n------------------\n");

//5-Showing the updated data of the pokemons
const updatedPokemon = pokemon.map((item) => {
  const { name, type, attackPoints, defensePoints } = item;
  return `The pokemon ${name} is a ${type} with ${attackPoints} attack points and ${defensePoints} defense points`;
});

//Printing the data of the pokemons in a table
console.log("Using map for showing the updated data: \n");
console.log(updatedPokemon);

console.log("\n------------------\n");

//6-Comparing the attack points of the pokemons with the defense points with reduce
const compareAttackDefense = pokemon.reduce((item) => {
  if (item.attackPoints > item.defensePoints) {
    return `You have more attack than defense`;
  } else {
    return `You have more defense than attack`;
  }
}, 0);

//Printing compare result
console.log("Using reduce for comparing the attack points with the defense points: \n");
console.log(compareAttackDefense);

console.log("\n------------------\n");