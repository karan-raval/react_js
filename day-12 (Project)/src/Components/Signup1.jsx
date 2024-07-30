import React, { useState } from "react";

const Signup1 = () => {
  const [state, setState] = useState("Signup");
  const [arr, setArr] = useState([]);
  const handleClick = () => {
    setArr([...arr, "skill"]);
  };

  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
    pnumber: "",
    email: "",
    password: "",
  });
  const [arr1, setarr] = useState([]);
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
  console.log(arr);
  return (
    <>
      {state == "Login" ? (
        <div className="page-content">
          <div className="form-v10-content">
            <form className="form-detail" onSubmit={handleSubmit} id="myform">
              <div className="form-left">
                <h2>General Infomation</h2>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      value={obj.firstname}
                      name="firstname"
                      id="first_name"
                      className="input-text"
                      placeholder="First Name"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      value={obj.lastname}
                      name="lastname"
                      onChange={handleChange}
                      id="last_name"
                      className="input-text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <select name="position">
                    <option value="position">Position</option>
                    <option value="director">Director</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="company"
                    className="company"
                    id="company"
                    placeholder="Company"
                    required
                  />
                </div>
                <div className="form-group gg">
                  <div className="form-row form-row-3">
                    <input
                      type="text"
                      name="SKILLS"
                      className="business"
                      id="business"
                      placeholder="Skills"
                      required
                    />
                    <span
                      onClick={handleClick}
                      className="material-symbols-outlined"
                    >
                      add
                    </span>
                  </div>
                </div>
                {arr.map((el) => {
                  return (
                    <div className="form-row form-row-3">
                      <input
                        type="text"
                        name={el}
                        className="business"
                        id="business"
                        placeholder="SKILLS"
                        required
                      />
                    </div>
                  );
                })}
              </div>
              <div className="form-right">
                <h2>Contact Details</h2>
                <div className="form-row">
                  <input
                    type="text"
                    name="street"
                    className="street"
                    id="street"
                    placeholder="Street + Nr"
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="additional"
                    className="additional"
                    id="additional"
                    placeholder="Additional Information"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="zip"
                      className="zip"
                      id="zip"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <select name="place">
                      <option value="place">Place</option>
                      <option value="Street">Street</option>
                      <option value="District">District</option>
                      <option value="City">City</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>
                <div className="form-row">
                  <select name="country">
                    <option value="country">Country</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="India">India</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="code"
                      className="code"
                      id="code"
                      placeholder="Code +"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      value={obj.pnumber} name='pnumber'  onChange={handleChange}
                      className="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    value={obj.email} name='email' onChange={handleChange}
                    id="your_email"
                    className="input-text"
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-row">
                  <input
                   type={viewPass ?  "text" : "password"}
                    name='password' value={obj.password} onChange={handleChange}
                    id="your_email"
                    className="input-pass"
                    required
                    placeholder="Password"
                  />
                  {viewPass==false ? <span onClick={()=>setviewPass(true)} className="material-symbols-outlined eye">
          visibility
            </span> : <span onClick={()=>setviewPass(false)} className="material-symbols-outlined eye">
            visibility_off
            </span>}
                </div>
                <div className="form-checkbox">
                  <label className="container">
                    <p>
                      I do accept the{" "}
                      <a className="text">
                        Terms and Conditions
                      </a>
                      of your site.
                    </p>
                    <input type="checkbox" name="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="form-row-last">
                  <input
                    type="submit"
                    name="register"
                    className="register"
                    value="Submit"
                  />
                  <div
                    className="text sign-up-text"
                    onClick={() => setState("Signup")}
                  >
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="containerr">
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type={viewPass ?  "text" : "password"}
                        placeholder="Enter your password"
                        required
                      />
                      {viewPass==false ?<span onClick={()=>setviewPass(true)} class="material-symbols-outlined">
visibility
</span>:
<span onClick={()=>setviewPass(false)} class="material-symbols-outlined">
visibility_off
</span>}
                    </div>
                    <div className="text">
                      <a>Forgot password?</a>
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Sumbit" />
                    </div>
                    <div
                      className="text sign-up-text"
                      onClick={() => setState("Login")}
                    >
                      Don't have an account?{" "}
                      <label htmlFor="flip">Sigup now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup1;
