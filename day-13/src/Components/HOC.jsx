import React from 'react'
import { useState } from 'react'

const HOC = (Original) => {
    const add=()=>{
        const [count,setcount] =useState(0)

        const handleInc=()=>{
            setcount(count+1)
        }
        const handleDec=()=>{
            setcount(count-1)
        }
        return (
            <>
            <h1>{count}</h1>
            <Original count={count} INC={handleInc} DEC={handleDec}/>
            </>
        )
    }
  return add;
}

export default HOC