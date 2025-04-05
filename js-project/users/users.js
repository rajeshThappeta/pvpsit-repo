let usersCards = document.querySelector(".users-cards")
let usersList = [];

//get users
async function getUsers() {
    let res = await fetch('https://reqres.in/api/users?page=2')
    let userInfoObj = await res.json();
    usersList = userInfoObj.data;
    // console.log(usersList)
    displayUsersCards(usersList)
}

getUsers()


//display users in grid of cards
function displayUsersCards(users) {
    //clear userCards
    usersCards.innerHTML = null;
    //logic to display users in the form of grid of cards

    users.forEach(userObj => usersCards.innerHTML += `<div class="col">
            <div class="card card-body">
                <img src=${userObj.avatar} class="rounded-circle w-25 py-5 d-block mx-auto" >
                <div class="d-flex justify-content-between">
                <button class="btn  btn-info" 
                        onclick='gotoUserPage(${JSON.stringify(userObj)})'>
                        More 
                        </button>
                <button class="btn btn-danger" 
                        onclick='deleteUser(${JSON.stringify(userObj)})'>
                        X 
                        </button>
                </div>
                
            </div>
        </div>`)

}

//delete user
function deleteUser(user) {
    console.log("user is ", user)
    let remainingUsers = usersList.filter(userObj => userObj.id !== user.id)
    usersList = remainingUsers;
    displayUsersCards(usersList)
}

//goto user page
function gotoUserPage(user) {
    console.log(user)
    //store user in local storage
    localStorage.setItem('userObj',JSON.stringify(user))
    //navigate to user.html page
    window.location = '../user/user.html'
}