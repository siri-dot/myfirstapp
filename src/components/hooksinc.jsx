import React, {useState} from 'react'

export default function HooksInc() {
    const [count,incCount]=useState(0)
    const inc=()=>{
        incCount(count+1)
    }
    const dec=()=>{
        if(count>1){
            incCount(count-1)
        }

        
    }
    return (
        <div>
            <h1 style={{background:"blue", color:"white"}}>{count}</h1>
            <button onClick={()=>inc()}>INC</button>
            <button onClick={()=>dec()}>DEC</button>
        </div>
    )
}