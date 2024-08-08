import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Admin = () => {
  const [dis,setDis] = useState(null)
  // const [id,setId] = useState("")
  const [state, setState] = useState({
    id:uuidv4(),
    title: "",
    bname: "",
    dprice: "",
    oprice: "",
    des: "",
    image: "",
  });
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   if(dis==null){
    setArr([...arr,state]);
   }else{
    let d = arr.map((el)=>{
      if(el.id == dis){
        return {...el,...state}
      }else{
        return el
      }
     })
     setArr(d)
     setDis(null)
  }
    setState({
      id:uuidv4(),
      title: "",
      bname: "",
      dprice: "",
      oprice: "",
      des: "",
      image: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handleDelete = (ID)=>{
    let a = [];  
    for(let x=0; x<arr.length; x++){
     if(arr[x].id != ID){
       a.push(arr[x])
     }
    }
    setArr(a)
   }

   const handleEdit = (ed)=>{
    setDis(ed)
    arr.forEach(ele=>{
      if(ele.id == ed){
        setState(ele)
      }
    })
      }

  let { title, dprice, oprice, bname, des, image } = state;
  return (
    <>
      <div className="body">
        <div className="wrapper ">
          <div className="title">Admin Panel</div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={title}
                  name="title"
                  placeholder="Enter Product Title"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={bname}
                  name="bname"
                  placeholder="Enter Product Brand Name"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={image}
                  name="image"
                  placeholder="Enter Product Image URL"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={dprice}
                  name="dprice"
                  placeholder="Enter Product Discount Price"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={oprice}
                  name="oprice"
                  placeholder="Enter Product Orignal Price"
                  className="input"
                />
              </div>
              <div className="input_field">
                <input
                  type="text"
                  onChange={handleChange}
                  value={des}
                  name="des"
                  placeholder="Enter Product Description"
                  className="input"
                />
              </div>
              <div className="input_field">
              <input type="submit" value={dis != null ? "Update" : "Submit"}  className="btn" />
                
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="data">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
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
            {arr.map((el) => {
              return (
                <tr>
                  <td>Product ID:-{el.id}</td>
                  <td> <img src={el.image} alt={el.title} /></td>
                  <td>{el.title}</td>
                  <td>{el.bname}</td>
                  <td>{el.dprice}</td>
                  <td>{el.oprice}</td>
                  <td>{el.des}</td>
                  <td><button className="btns" onClick={()=>handleDelete(el.id)}>Delete</button></td>
                  <td><button className="btns" onClick={()=>handleEdit(el.id)}>edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Admin;
