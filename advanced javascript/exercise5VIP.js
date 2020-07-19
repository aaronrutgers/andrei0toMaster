// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const array1 = []
array.forEach(user => {
  array1.push(user.username + "!")
})

console.log(array1);


//Create an array using map that has all the usernames with a "? to each of the usernames


//Filter the array to only include users who are on team: red
const array2 = array.filter(user => user.team === "red")
console.log(array2);


//Find out the total score of all users using reduce
const array3 = array.reduce((acc, user) => {
  return acc + user.score
}, 0)
console.log(array3);



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

const arrayNum = [1, 2, 4, 5, 8, 9];
const newNums = arrayNum.map(num => num * 2)
console.log(newNums);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newUsers = array.map(user => {
  user.items = user.items.map(item => item + "!")
  return user
})
console.log(newUsers);
