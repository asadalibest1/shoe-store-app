import React, {createContext} from 'react'

const iState = [];

export const Data = createContext(iState);

const reducer = (state, action) =>{
    switch(action.type){
        
        case "ADD_VAL":{

            return [
                ...state,
                {name: action.payload1,
                // img: action.payload2,
                // title: action.payload3
            }
            ]
        } 
        
        default : return state;     
        
    }
            
};

export const TransProvider = ({children}) =>{
    let [data, dispatch] = React.useReducer(reducer, iState);
    

const changeVal = (name) =>{
    dispatch({
        type: "ADD_VAL",
        payload1: name,
        // payload2: img,
        // payload3: title,
    })

} 

const values ={
    data,
    changeVal,
}
    return(
        <>

        <Data.Provider value={values}>
                {children}
        </Data.Provider>
        
        </>
        
    )
}