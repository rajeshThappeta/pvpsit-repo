//create context object
import {createContext,useState} from 'react';
export const contextObj=createContext();

//create Store
function CounterStore({children}){

    //state
    const [counter,setCounter]=useState(0);
  

    return(
        <contextObj.Provider value={{counter,setCounter}}>
                {children}
        </contextObj.Provider>
    )
}

export default CounterStore;