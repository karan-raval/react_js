import React from "react";
import { useState } from "react";

export const Form = () => {
  const [obj, setObj] = useState({
    firstname:"",
    lastname:"",
    pnumber:"",
    email: "",
    password: "",
  });
  const [arr, setarr] = useState([]);
  const [viewPass, setviewPass] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setarr([...arr, obj]);
    setObj({
      firstname:"",
      lastname:"",
    pnumber:"",
      email: "",
      password: "",
    });
  };
  console.log(arr);
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="box">
            <label htmlFor="firstName" className="fl fontLabel">
            First Name:
            </label>
            <div className="new iconBox">
              <i className="fa fa-user" ></i>
            </div>
            <div className="fr">
              <input type="text"  placeholder="First Name" className="textBox" value={obj.firstname} name='firstname'  onChange={handleChange} required />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="secondName" className="fl fontLabel">
              Seconed Name:
            </label>
            <div className="fl iconBox">
              <i className="fa fa-user"></i>
            </div>
            <div className="fr">
              <input type="text"  value={obj.lastname} name='lastname'  onChange={handleChange} placeholder="Last-Name" className="textBox" required />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="phone" className="fl fontLabel">
              Phone No.:
            </label>
            <div className="fl iconBox">
              <i className="fa fa-phone-square" ></i>
            </div>
            <div className="fr">
              <input type="text"  placeholder="Phone No." value={obj.pnumber} name='pnumber'  onChange={handleChange} className="textBox" required />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="email" className="fl fontLabel">
              Email ID:
            </label>
            <div className="fl iconBox">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input type="email" placeholder="Email Id" className="textBox" value={obj.email} name='email' onChange={handleChange} required/>
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="password" className="fl fontLabel">
              Password
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input type={viewPass ?  "text" : "password"} placeholder="Password" className="textBox" name='password' value={obj.password} onChange={handleChange} required />
            </div>
            {viewPass==false ? <span onClick={()=>setviewPass(true)} className="material-symbols-outlined eye">
          visibility
            </span> : <span onClick={()=>setviewPass(false)} className="material-symbols-outlined eye">
            visibility_off
            </span>}
            <div className="clr"></div>
          </div>
          <div className="box radio">
            <label htmlFor="gender" className="fl fontLabel">
              Gender:
            </label>
            <input type="radio" name="Gender" value="Male" required /> Male
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="Gender" value="Female" required /> Female
          </div>
          <div className="box terms">
            <input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
          </div>
          <div className="box ss">
            <input type="Submit" name="Submit" className="submit" value="submit"/>
          </div>
        </form>
      </div>
    </>
  );
};