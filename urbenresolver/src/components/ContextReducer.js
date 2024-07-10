import React, { createContext, useContext, useReducer } from 'react'

const CheckStateContext=createContext();
const CheckDispatchContext=createContext();

const reducer =(state,action)=>{

}



export const CheckProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return(
        <CheckDispatchContext.Provider value={dispatch}>
            <CheckStateContext.Provider value={state}>
                {children}
            </CheckStateContext.Provider>
        </CheckDispatchContext.Provider>

    )
}

export const useCheck =()=>useContext(CheckStateContext);  
export const useDispatchCheck=()=>useContext(CheckDispatchContext);