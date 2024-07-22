import React from 'react'

const Data = (props) => {
  // console.log(arr);
  return (
    <>
  <div className='Products'>
         {
           props.arr && props.arr.map((el)=>{
                return (
                     <div className='newproduct' key={el.id}>
                        <img className='productimg' src={el.imgurl} alt=""/>
                        <h4 className='product-name'>{el.name}  -  ₹{el.dprice}</h4>
                        <strike>₹{el.oprice}</strike>
                        <p>Brand :- {el.brand}</p>
                        <span>catagory -{el.catagory}</span>
                        <br />
                        <br />
                        <button className='bbtn' onClick={()=>props.del(el.id)}>Delete</button>
                        <button className='bbtn' onClick={()=>props.edit(el.id)}>Edit</button>
                     </div>
                )
            })
        }
        </div>
    </>
  )
}

export default Data