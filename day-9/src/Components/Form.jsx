import React from "react";

export const Form = () => {
  return (
    <>
      <div className="container">
        <form method="post" autocomplete="on">
          <div className="box">
            <label for="firstName" className="fl fontLabel">
              {" "}
              First Name:{" "}
            </label>
            <div className="new iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="textBox"
                required
              />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label for="secondName" className="fl fontLabel">
              {" "}
              Seconed Name:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="secondName"
                placeholder="Last Name"
                className="textBox"
              />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label for="phone" className="fl fontLabel">
              {" "}
              Phone No.:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-phone-square" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="text"
                required
                name="phoneNo"
                maxlength="10"
                placeholder="Phone No."
                className="textBox"
              />
            </div>
            <div className="clr"></div>
          </div>

          <div className="box">
            <label for="email" className="fl fontLabel">
              {" "}
              Email ID:{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="email"
                required
                name="email"
                placeholder="Email Id"
                className="textBox"
              />
            </div>
            <div className="clr"></div>
          </div>

          <div className="box">
            <label for="password" className="fl fontLabel">
              {" "}
              Password{" "}
            </label>
            <div className="fl iconBox">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="fr">
              <input
                type="Password"
                required
                name="password"
                placeholder="Password"
                className="textBox"
              />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box radio">
            <label for="gender" className="fl fontLabel">
              {" "}
              Gender:{" "}
            </label>
            <input type="radio" name="Gender" value="Male" required /> Male
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="Gender" value="Female" required /> Female
          </div>
          <div className="box terms">
            <input type="checkbox" name="Terms" required /> &nbsp; I accept the
            terms and conditions
          </div>

          <div className="box ss" >
            <input type="Submit" name="Submit" className="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    </>
  );
};
