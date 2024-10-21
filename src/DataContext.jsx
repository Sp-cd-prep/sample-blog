import React from 'react'
import { createContext } from 'react'
import Data from './Data';

//context has been created 
const DataContext = createContext();

//To provide the data accross all the componnets
export const DataProvider=({children})=>{

    //store the JSON format Data
    const data = Data;

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext


// 1. create context
// 2.data provide with the help of value props
// 3. use useContext hook in case of consumer