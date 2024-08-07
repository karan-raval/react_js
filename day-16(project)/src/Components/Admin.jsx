import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react' onChange={handleChange} value={title} name='title' 
const Admin = () => {
  const [state,setState] = useState({
    title : "",
    price : "",
    des : "",
    image : ""
 })
 const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
  const handleChange = (e)=>{
          let {name,value} = e.target
          setState({...state,[name] : value})
  } 
 const handleSubmit = (e)=>{
     e.preventDefault()
     setArr([...arr,state])
     setState({
      title : "",
      price : "",
      des : "",
      image : ""
     })
 }
 useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(arr))
 },[arr])
 const handleDelete = (title)=>{
     let a = [];
     for(let x=0; x<arr.length; x++){
      if(arr[x].title != title){
        a.push(arr[x])
      }
     }
     setArr(a)
 }
 let {title,price,des,image} = state
  return (
    <>
    <div className="body">
    <div class="wrapper ">
    <div class="title">
      Admin Panel
    </div>
    
    <div class="form">
      <form >
      <div class="input_field">
        <input type="text" onChange={handleChange} value={title} name='title'  placeholder="Enter Product Title" class="input"/>
      </div>
      <div class="input_field">
        <input type="text" onChange={handleChange} value={price} name='price'  placeholder="Enter Product Brand Name" class="input"/>
      </div>
      <div class="input_field">
        <input type="text" onChange={handleChange} value={title} name='title'  placeholder="Enter Product Image URL" class="input"/>
      </div>
      <div class="input_field">
        <input type="text" onChange={handleChange} value={title} name='title'  placeholder="Enter Product Discount Price" class="input"/>
      </div>
      <div class="input_field">
        <input type="text" onChange={handleChange} value={title} name='title'  placeholder="Enter Product Orignal Price" class="input"/>
      </div>
      <div class="input_field">
        <input type="text" onChange={handleChange} value={title} name='title'  placeholder="Enter Product catagory" class="input"/>
      </div>
      <div class="input_field">
      <input type="submit"  class="btn"/>
      </div>
    </form>
    </div>
  </div>
  </div>

    <div className="data">
  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Product Title</th>
          <th>Product Brand Name</th>
          <th>Product Image URL</th>
          <th>Product Discount Price</th>
          <th>Product Orignal Price</th>
          <th>Product catagory</th>
          <th>Delet</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        
         
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default Admin;
