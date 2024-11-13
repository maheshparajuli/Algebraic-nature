import React from 'react';
import { useState } from 'react';

 function Home(){
    const [name,changeName]=useState("Mahesh");
    


    return(
        <>
        <h1 onClick={()=>changeName("biskal")}>{name}</h1>

    
        </>
    );

    
}
export default Home;