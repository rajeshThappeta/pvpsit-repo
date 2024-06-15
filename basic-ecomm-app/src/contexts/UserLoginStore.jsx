import { userLoginContext } from "./userLoginContext";
import { useState } from "react";

function UserLoginStore({ children }) {
  //login user state
  let [currentUser, setCurrentUser] = useState({});
  let [userLoginStatus,setUserLoginStatus]=useState(false)

  //make Login req
  async function loginUser(userCred) {
    let res = await fetch(
      `http://localhost:3000/users?username=${userCred.username}&password=${userCred.password}`
    );
    let usersList = await res.json();
    console.log("users list",usersList)
    if (usersList.length === 0) {
      //invalid credentials
      console.log("invalid user")
      setCurrentUser({})
      setUserLoginStatus(false)
    } else {
      setCurrentUser(usersList[0]);
      setUserLoginStatus(true)
    }
  }

  return (
    <userLoginContext.Provider value={{ setUserLoginStatus, loginUser }}>
      {children}
    </userLoginContext.Provider>
  );
}

export default UserLoginStore;
