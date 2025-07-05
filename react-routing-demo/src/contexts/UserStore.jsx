import {createContext,useState} from 'react'
export const userContextObj=createContext();


function UserStore({children}){
      const [user,setUser]=useState({uid:100,name:'ravi'})

       return(
              <userContextObj.Provider value={{user,setUser}}>
                      {children}
              </userContextObj.Provider>
          )
}

export default UserStore;