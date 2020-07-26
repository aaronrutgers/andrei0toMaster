// es8之前的写法
const urls = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}).catch('oops')





// es8之后的异步函数写法,可赋值
const urls = [
    'https://jsonplaceholdeMISTAKE.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log('oops', error);
    }
}
getData()





// 以下是基本介绍
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)


async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);
}



