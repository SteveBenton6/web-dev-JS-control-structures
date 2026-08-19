// JS Comments Format

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Tanya", "Kartel", "Charmaine"];
for (const user of users) {
  console.log(user);
}

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

const loggedInUser = {
  name: "Kartel",
  age: 36,
  isAdmin: true,
};
for (const key in loggedInUser) {
  console.log(`${key}: ${loggedInUser[key]}`);
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");
