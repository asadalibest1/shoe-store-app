// import React,{ useEffect, useState } from "react";

// export default function ShoeApi(){
//  const [data, setData] = useState('');

//     useEffect(()=>{
//         async function api(){
//             const URL = "https://fakestoreapi.com/"
//                  const response = await fetch(URL + "products?limit=9")
//                     const jsonData = await response.json();
             
//             setData(jsonData)
//             // jsonData;
            
//         }
//         api();
//     },[])
//     return {data};
// }


const URL = "https://fakestoreapi.com/"

export const getAllProducts = async () => {
    const response = await fetch(URL + "products?limit=9")
    const jsonData = await response.json()
    return jsonData
}