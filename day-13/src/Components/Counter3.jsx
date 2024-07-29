import React from 'react'
import HOC from './HOC'

const Counter3 = ({count,INC,DEC}) => {
  return (
    <>
    <button onClick={INC}>+</button>
    <button disabled={count==0}onClick={DEC}>-</button>
    </>
  )
}

export default HOC(Counter3)