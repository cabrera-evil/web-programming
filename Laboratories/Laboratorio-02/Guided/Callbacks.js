const id = 1;
// Champs Array
const champs = [
    {
      id: 1,
      name: "Warwick",
      title: "The Blood Hunter",
    },
    {
      id: 2,
      name: "Ahri",
      title: "The Nine-Tailed Fox",
    },
    {
      id: 3,
      name: "Jhin",
      title: "The Virtuoso",
    },
];

// Items Array
const items = [
  {
    id: 1,
    name: "Sheen",
    cost: 700,
  },
  {
    id: 2,
    name: "Needlessly Large Rod",
    cost: 1300,
  },
];

// Get Champ Function
const getChampById = (id, callback) => {
  const champ = champs.find((champ) => champ.id === id);
  if (!champ) {
    callback(`No champ with id ${id}`);
  }
  else {
    callback(null, champ);
  }
};

// Get Item Function
const getItemById = (id, done) => {
  const item = items.find((item) => item.id === id);
  if (!item) {
    done(`No item with id ${id}`);
  }
  else {
    done(null, item);
  }
};

// Get Champ and Item Function (Callback Hell)
getChampById(id, (err, champ) => {
  if (err) {
    return console.log(`Warning: ${err}`);
  }
  getItemById(id, (err, item) => {
    if (err) {  
      return console.log(`Warning: ${err}`);
    }
    else{
      // Print Champ and Item Function
      console.log(
        `${champ.title} - ${champ.name} has a ${item.name} which costs ${item.cost} gold.`
      );
    }
  });
});
