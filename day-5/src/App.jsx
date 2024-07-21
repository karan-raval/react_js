import React from "react";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginpass, setLoginpass] = useState("");
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    let obj = {
      username: name,
      email: email,
      pass: password,
    };
    if (obj.username == "" && obj.email == "" && obj.pass == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Above details!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });
      setArr([...arr, obj]);
    }
  };
  const handleLoginClick = () => {
    let data = arr.filter((el) => {
      return el.email == loginEmail && el.pass == loginpass;
    });
    // console.log(data);
    if (data.length > 0) {
      Swal.fire({
        title: "Login Succesfully...",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Unsuccessfull!",
      });
    }
  };

  return (
    <div>
      {state == "Login" ? (
        <div className="center">
          <h1>Login</h1>
          <form>
            <div className="txt_field">
              <input
                type="email"
                onChange={(d) => setLoginEmail(d.target.value)}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                onChange={(d) => setLoginpass(d.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" onClick={handleLoginClick} value="Login" />
            <div className="signup_link">
              Not a member?{" "}
              <a onClick={() => setState("Signup")}>
                Signup
              </a>
            </div>
          </form>
        </div>
      ) : (
        <div className="container">
          <div className="title">Signup</div>
          <div className="content">
            <form>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name"  />
                </div>
                <div className="input-box">
                  <span className="details">Username<sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    onChange={(d) => setName(d.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email<sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(d) => setEmail(d.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number"  />
                </div>
                <div className="input-box">
                  <span className="details">Password <sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    onChange={(d) => setPassword(d.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Confirm your password"
                    
                  />
                </div>
              </div>
              
              <div className="button">
                <input type="button" onClick={handleClick} value="Submit" />
              </div>
              <div className="signup">
                <span className="signup">
                  Already have an account ?
                  <label for="check" onClick={() => setState("Login")}>
                    Login
                  </label>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
