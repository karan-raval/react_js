import React, { useState } from 'react'

const Form = () => {
  const [arr,setArr] = useState(['skill'])
  const handleClick = ()=>{
      setArr([...arr,"skill"])
  }
  return (
    <>
  <form>
    <h2>Student Registration Form</h2>

    <label for="first-name">First Name:</label>
    <input type="text" className='input' id="first-name" name="first-name" required/>

    <label for="last-name">Last Name:</label>
    <input type="text" className='input' id="last-name" name="last-name" required/>

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" required/>

    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required/>

    <label for="mobile">Mobile:</label>
    <input type="tel" id="mobile" name="mobile" required/>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>

    <label for="address">Address:</label>
    <textarea id="address" className='input' name="address" required></textarea>

    <label for="city">City:</label>
    <input type="text" className='input' id="city" name="city" required/>

    <label for="pin-code">Pin Code:</label>
    <input type="text" className='input' id="pin-code" name="pin-code" required/>

    <label for="state">State:</label>
    <input type="text" className='input' id="state" name="state" required/>

    <label for="country">Country:</label>
    <input type="text" className='input' id="country" name="country" required/>

    <div className='hobbybox'>
    <label for="hobbies">Skills :</label>
    <input type="text" className='hobbyinput' /><span onClick={handleClick} className="material-symbols-outlined plus">
add
</span>
    </div>

    {
                arr.map((el)=>{
                    return (
                        <input type='text' className='hobbyinput' name={el}/>
                    )
                })
             }

    <div className="buttons">
      <button type="submit">Submit</button>
    </div>
  </form>
    </>
  )
}

export default Form