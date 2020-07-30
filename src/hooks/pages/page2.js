import React from'react';
import {Data} from '../Store';

export default function PageTwo(){
    const {data, changeVal} = React.useContext(Data);

function changeValue(){
    changeVal(Math.random());
};
return(
       <>
       <h1>this is page 2</h1>
        
        <button onClick={changeValue}>Change value</button>
        {data.map(({name}) => {
           return(
               <div>
                <p>name: {name};</p>
               </div>
           )
        })}
    </>
   )
}