import React from 'react'

export const Signup = () => {
  return (
   <>
     <div className="form-container">
        <h1>Student Registration Form</h1>
        <form >
          <div className="input-group">
            <label><strong>First Name:</strong></label>
            <input type="text" placeholder="Enter Your First Name" id="fname" />
            <span id="fname-error"></span>
          </div>
    
          <div className="input-group">
            <label><strong>Last Name:</strong></label>
            <input type="text" placeholder="Enter Your Last Name" id="lname" />
            <span id="lname-error"></span>
          </div>
    
          <div className="input-group">
            <label><strong>Date of Birth:</strong></label>
            <input type="date" id="dob" />
            <span id="dob-error"></span>
          </div> 

          <div className="input-group">
            <label><strong>Email Id:</strong></label>
            <input type="email" placeholder="Enter Your Email Id" id="email-id"/>
            <span id="email-error"></span>
          </div>

          <div className="input-group">
            <label><strong>Mobile No.:</strong></label>
            <input type="tel" placeholder="Enter your mobile number" id="phone-no" />
            <span id="mobile-error"></span>
          </div>

          <div className="input-group">
            <label><strong>Gender:</strong></label>
            <input type="radio" style={{flexbasis:"0%",margin:'0 10px'}} name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label> 
            <input type="radio" style={{flexbasis:"0%",margin:'0 10px'}} name="gender" value="female" id="female" />
            <label htmlFor="female">Female</label> 
            <span id="gender-error"></span>
          </div> 

          <div className="input-group">
            <label><strong>Country:</strong></label>
            <select name="country" id="country-name" >
              <option value="" selected="selected" >Select Country</option>
            </select>
            <span id="country-error"></span>
          </div> 

          <div className="input-group">
            <label><strong>State:</strong></label>
            <select name="state" id="state-name" >
              <option value="" selected="selected">Please select country first</option>
            </select>
            <span id="state-error"></span>
          </div> 

          <div className="input-group">
            <label><strong>Address:</strong></label>
            <input type="text" placeholder="Enter Your Address" id="address" />
            <span id="address-error"></span>
          </div>

          <div className="input-group">
            <label><strong>Pin Code:</strong></label>
            <input type="text" placeholder="Enter Your Pin Code" id="pincode" />
            <span id="pin-error"></span>
          </div> 

          <div className="input-group">
            <label><strong>City:</strong></label>
            <input type="text" placeholder="Enter Your City" id="city" />
            <span id="city-error"></span>
          </div>

          <div className="input-group">
            <label><strong>District:</strong></label>
            <select name="district" id="district-name">
              <option value="" selected="selected">Please select state first</option>
            </select>
            <span id="district-error"></span>
          </div> 
    
          <div className="input-group">
            <label><strong>Hobbies:</strong></label>
            <textarea rows="5" placeholder="Enter Your Hobbies" id="hobbies" ></textarea>
            <span id="hobbies-error"></span>
          </div>
    
        <button >Submit</button>
        <span id="submit-error"></span>
       
      </form>

      </div>
   </>
  )
}
