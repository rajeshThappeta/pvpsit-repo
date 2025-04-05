

let users;
//get data from APi & display it in the form of table

//get data from api
async function getData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users')
     users=await res.json();
   // console.log(users)
    displayUsersTable(users)
}   

getData()


//get tbody
let tbody=document.querySelector('tbody')

//disply users in table
function displayUsersTable(users){
    //clear tbody before displaying latest users info
    tbody.innerHTML=null;
    users.forEach((userObj)=>{
        tbody.innerHTML+=`<tr>
            <td>${userObj.id}</td>
            <td>${userObj.name}</td>
            <td>${userObj.username}</td>
            <td>${userObj.email}</td>
            <td><button class="btn btn-danger" onclick='deleteUser(${JSON.stringify(userObj)})'>x</button></td>
        </tr>`

    })
}


//delete user by id

function deleteUser(user){
    //get all users except the use recived as arg
    let remainingUsers=users.filter(userObj=>userObj.id!==user.id)
    //update original users list with latest one
    users=remainingUsers;
    //call display table method
    displayUsersTable(remainingUsers)
}
