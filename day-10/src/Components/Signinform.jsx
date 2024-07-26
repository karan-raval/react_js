import React from "react";
import { useState } from "react";

const Signinform = () => {
  const [isFocused, setIsFocused] = useState(false); 
  const [isblur, setisbliur] = useState(false); 
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
    pnumber: "",
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
      firstname: "",
      lastname: "",
      pnumber: "",
      email: "",
      password: "",
    });
  };
  const handleBlur =()=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,22}$/; 

    
    // setviewPass(regex.test(obj.password))
     console.log(viewPass)
     setIsFocused(false)
      if(regex.test(obj.password)){
      // {
        setisbliur(false);
        // console.log("viewpass is false")
        // setIsFocused(true);
      }else{
        setisbliur(true)
      }
    }

   const handleFocus = ()=>{
    
   
   if(isblur == false){
     setIsFocused(true)
     
   }
  //  if(viewPass==true){
  //   setisbliur(false);
  //   console.log("viewpass is true")
  //  }
    // x.style.background="red"
    //  console.log("Focus wala"); 
   }
  // console.log(arr);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
            <span>
              Already have an account? <a>Login In</a>
            </span>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={obj.firstname}
                name="firstname"
                onChange={handleChange}
                required
                placeholder="Full Name"
              />
              <input
                type="text"
                value={obj.pnumber}
                name="pnumber"
                onChange={handleChange}
                required
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="lastname"
                value={obj.lastname}
                onChange={handleChange}
                required
                placeholder="User Name"
              />
              <input
                type="email"
                name="email"
                value={obj.email}
                onChange={handleChange}
                required
                placeholder="Email"
                id="email"
              />
              <input
                type={viewPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={obj.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus} 
              />
              {isFocused ==false  ? "" : <p>password include special character</p>}
              {isblur == false  ? " " :<p>password must be 8 character</p>}
              <div className="eye">
                {viewPass == false ? (
                  <span
                    onClick={() => setviewPass(true)}
                    className="material-symbols-outlined"
                  >
                    visibility
                  </span>
                ) : (
                  <span
                    onClick={() => setviewPass(false)}
                    className="material-symbols-outlined"
                  >
                    visibility_off
                  </span>
                )}
              </div>
            <button className="btn-hover color-9">Sign Up</button>
            </form>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" />
            <span>
              I have read and agree to the <a href="">Terms of Service</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
