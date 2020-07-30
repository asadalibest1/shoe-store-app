import React, {createContext} from 'react'

const state = {};

export const Data = createContext(state);

const reducer = (state, action) =>{
    switch(action.type){
        
        case "CHNAGE_ONE":{

            return action.payload;
        } 
        
        default : return state;     
        
    }
            
};

export const TransProvider = ({children}) =>{
    let [Data, dispatch] = React.useReducer(reducer, Data);
    

const changeVal = transObj =>{
    dispatch({
        type: "CHNAGE_COUNTRY",
        payload: transObj,
    })

} 

const values ={
    Data,
    changeVal,
}
    return(
        <>

        <CountryData.Provider value={values}>
                {children}
        </CountryData.Provider>
        
        </>
        
    )
}