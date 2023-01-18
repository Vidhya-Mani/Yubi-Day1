import React, { useState, useEffect } from 'react';
export default function Searchbox({setinputValue}){


    function handleChange(e){
         setinputValue(e.target.value)
    }
    return(
        <>
        <input placeholder='"search here' onChange={handleChange}/>
        </>
    )
}