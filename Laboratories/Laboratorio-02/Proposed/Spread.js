const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@test.com",
        age: 60,
        salary: 1099,
    },
    {
        id: 2,
        name: "Robert Singer",
        email: "bobby@test.com",
        age: 62,
        salary: 999,
    },
    {
        id: 3,
        name: "Misha Collins",
        email: "castiel@test.com",
        age: 35,
        salary: 899,
    },
    {
        id: 4,
        name: "Dean Winchester",
        email: "dean@test.com",
        age: 41,
        salary: 799,
    },
    {
        id: 5,
        name: "Sam Winchester",
        email: "sam@test.com",
        age: 36,
        salary: 699,
    },
];

//1-Showing the unmodified array
console.log("Showing the unmodified array\n");
console.log(users);

console.log("\n------------------\n");

//2-Creating updateUser to update name and salary for the sended id, delete the unmodified user data,
//and  replace it with the updated data with splice and keep the unmodified attributes
const updateUser = (id, newName, newSalary) => {
    const index = users.findIndex((item) => {
        return item.id == id;
    });
    const user = users[index];
    const {name, salary, ...aux} = user;
    const updatedUser = {id, name:newName, ...aux, salary: newSalary};
    users.splice(index, 1, 0);
    users.splice(index, 1, updatedUser);
}
//New user data
updateUser(1, "John Winchester", 1500);

//Printing the updated data
console.log("Showing the updated data\n");
console.log(users);

console.log("\n------------------\n");

//3-Creating usersWithoutID, using map and spread separator to remove the id attribute
const usersWithoutID = users.map((item) => {
    const { id, ...rest } = item;
    return rest;
}
);

//Printing the updated data
console.log("Showing the updated data without id\n");
console.log(usersWithoutID);

console.log("\n------------------\n");
