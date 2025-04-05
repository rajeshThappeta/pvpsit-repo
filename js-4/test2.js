
// function getPosts() {
//     //make network(API) req
//     fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'})
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }


//consume promise using async & await
async function getPosts() {

    //make network(API) req
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        let data = await res.json()
        console.log(console.log(data))
    } catch (err) {
        console.log("err is ", err)
    }
}


getPosts()



function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        .then(res => res.json())
        .then(userData => console.log(userData))
        .catch(err => console.log("err is ", err))
}

//getUsers()