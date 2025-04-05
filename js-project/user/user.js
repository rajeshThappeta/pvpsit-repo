//get current user from storage
let currentUser = JSON.parse(localStorage.getItem('userObj'))

let backButton = document.querySelector(".users-btn")

//get user element from DOM
let userelement = document.querySelector('.user')

userelement.innerHTML += `
    <img src=${currentUser.avatar} class="w-75 rounded-circle" >
    <h1>${currentUser.id}</h1>

    <h2>${currentUser.first_name} ${currentUser.last_name}</h2>
    <p className="lead">${currentUser.email}</p>


`
backButton.addEventListener('click', () => {

    //remove user from local storage
    localStorage.removeItem("userObj")
    //naviagte to userslist page
    window, location = '../users/userslist.html'
})

