import React from 'react'
import  { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
        setCounter(counter + 1);
    };
 
    const handleClick2 = () => {
        setCounter(counter - 1);
    };
  return (
    <>
     <div className='main'
            
        >
            Counter App
            <div className='div1'
                
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    className='btn'
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button disabled={counter == 0} className='btn1'
                    
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    </>
  )
}

export default Counter