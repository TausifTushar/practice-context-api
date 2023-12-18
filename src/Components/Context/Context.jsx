/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext()

const Context = ({children}) => {


    const [data, setData] = useState({})
    // const [use, setUser ] = useState({})
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        setLoading(true);
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        setLoading(false)}
       
        )

     

        
    }, [])

    const handelChange=(product)=>{
        console.log(product)
    }

    const userSearch= (e)=>{

        const searchData = e.target.value;
        console.log(e.target.value)
        productSearch(searchData)
    }

    const productSearch = (productSearch)=>{
        fetch(`https://dummyjson.com/products/search?q=${productSearch}`)
        .then(res=>res.json())
        .then(val=>setData(val))
    }


    return (
       <MyContext.Provider value={{data, loading, userSearch, handelChange }}>
            {children}
       </MyContext.Provider>
    );
};

export default Context;