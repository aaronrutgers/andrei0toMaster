var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "777"
    }
]


var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: 'Sally',
        timeline: "Javascript is soooo coool!"
    }
]

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")



function signIn(user, pass) {
    console.log(isUserValid(user, pass));

}

function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (user === database[i].username &&
            pass === database[i].password) {
            console.log(newsFeed);
            return true
        }
    }
    return false

}

signIn(userNamePrompt, passwordPrompt)