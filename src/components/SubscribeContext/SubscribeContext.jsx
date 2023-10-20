'use client"';
import { createContext,useState } from "react";
import React  from "react";
const SubscribeContext = createContext();
export function SubContextProvider({children}){
    const [onSubButtonClick,setOnSubButtonClick] = React.useState(()=>()=>{})
    return(
        <SubscribeContext.Provider value={{onSubButtonClick,setOnSubButtonClick}} > {children} </SubscribeContext.Provider>
    )
}
export default SubscribeContext;