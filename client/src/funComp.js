import { useState } from "react";

function Funcopm(){
    const [num,setNum]=useState(0);
    function inc(){
        setNum(num+1);
    }
    return(
        <div className='func-copm' >
            <h1>function Component</h1>
            <h2>numner : {num}</h2>
            <button onClick={inc} className="inc">Increase </button>
        </div>
    )
}

export default Funcopm;