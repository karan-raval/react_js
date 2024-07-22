import React from 'react'
import { useState } from 'react'
import Data from './Data'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import Loder from './Loder';

// or via CommonJS
// const Swal = require('sweetalert2')

const Adminform = () => {
  const [dis,setDis] = useState(false)
  const [id,setId] = useState("")
  const [data,setData] = useState([])
  const [obj,setObj] = useState({
    id: uuidv4(),
    name : "",
    brand : "",
    imgurl : "",
    dprice : "",
    oprice:"",
    catagory:""
})

const handleChange = (e)=>{
    setObj({...obj, [e.target.name] : e.target.value})
}
const handleClick = ()=>{
  if(obj.name=="")
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    });
  }
  else if (obj.brand==""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    });
  }else if ( obj.imgurl==""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    });
  }else if (obj.dprice==""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    })
  }else if (obj.oprice==""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    })
  }else if (obj.catagory==""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill All The Details!",
    })
  }else{
    setData([...data,obj])
  }

setObj({
  id: uuidv4(),
    name : "",
    brand : "",
    imgurl : "",
    dprice : "",
    oprice:"",
    catagory:""
})}  

const handleEdit = (ed)=>{
  setDis(true)
  setId(ed)
  data.forEach((el)=>{
     if(el.id == ed){
        setObj(el)
     }
  })
}
const handleUpdate = ()=>{
 let d = data.map((el)=>{
   if(el.id == id){
      return {...el,...obj}
   }else{
     return el;
   }
 })
 setData(d)
 setDis(false)
 setObj({
   id :v4(),
   name : "",
    brand : "",
    imgurl : "",
    dprice : "",
    oprice:"",
    catagory:""
})
}

const handleDelete = (dl)=>{
     
  let d = data.filter((el)=>{
    if(el.id != dl){
      return el;
    }
   })
  setData(d)

 }

  return (
    <>
    <div className="main">
    <div className="form-container">
    <h2>Add Data</h2>
    <div className="signup-form">
        <input type="text" name='name' value={obj.name}  placeholder="Product Name" onChange={handleChange} />
        <input type="text" name='brand' value={obj.brand} placeholder="Product Brand" onChange={handleChange}/>
        <input type="text" name='imgurl' value={obj.imgurl} placeholder="Product Image Link" onChange={handleChange}/>
        <input type="number" name='dprice' value={obj.dprice} placeholder="Product Discount Price" onChange={handleChange}/>
        <input type="number" name='oprice' value={obj.oprice} placeholder="Product Orignal Price" onChange={handleChange}/>
        <input type="text" name='catagory' value={obj.catagory} placeholder="Product catagory" onChange={handleChange}/>
        <button onClick={handleClick}>SUBMIT</button>
        <button onClick={handleUpdate} style={{ display : dis ? "inline-block" : "none"}}>Update</button>
    </div>
</div>
    {data.length==0 ? <Loder/> : <Data del={handleDelete} arr={data} edit={handleEdit} />}
    </div>
    </>
  )
}

export default Adminform