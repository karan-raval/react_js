import React from 'react'
import HOC from './HOC'

const Counter2 = (props) => {
  return (
    <>
    <button onClick={props.INC}>+</button>
    <button disabled={props.count==0} onClick={props.DEC}>-</button>
    </>
  )
}

export default HOC(Counter2)