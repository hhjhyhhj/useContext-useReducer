import React,{createContext,useReducer} from "react";

import ShowWord from "./word";
import ShowButton from "./button";



export  const ColorContext = createContext({})

const reducer = (state,action)=>{
    switch(action.type){
        case 'red':
            return action.color
        case 'yellow':
            return action.color
        default:
            return state
    }
}

export const Color = ()=>{
        const [state,dispatch] = useReducer(reducer,'blue')
    return(
        <ColorContext.Provider value={{state,dispatch}}>
                <ShowWord/>
                <ShowButton/>
        </ColorContext.Provider>
    )
}