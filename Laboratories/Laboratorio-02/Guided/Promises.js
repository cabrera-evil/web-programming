const id = 1;
let heroeName;

// Heroes Array
const heroes = [
    {
        id: 1,
        name: "Thor",
    },
    {
        id: 2,
        name: "Iron Man",
    },
    {
        id: 3,
        name: "Batman",
    },
];

// Heroe's  Origin Array
const origins = [
    {
        id: 1,
        location: "Asgard",
    },
    {
        id: 2,
        location: "Earth",
    },
];

// getHeroe Function
const getHeroe = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = heroes.find((h) => h.id === id)?.name;
        heroe ? resolve(heroe) : reject("Heroe not found");
    });
};

// getOrigin Function
const getOrigin = (id) => {
    return new Promise((resolve, reject) => {
        const origin = origins.find((o) => o.id === id)?.location;
        origin ? resolve(origin) : reject("Origin not found");
    });
};

// getHeroe and getOrigin Function (Promise)
getHeroe(id).then((heroe) => {
    heroeName = heroe;
    return getOrigin(id);
    
});

// Solving the second promise (Origin)
getOrigin(id).then((origin) => console.log(`${heroeName} is from ${origin}`))
// Show the error (If it exist)
getHeroe(id).catch((err) => console.warn(err));