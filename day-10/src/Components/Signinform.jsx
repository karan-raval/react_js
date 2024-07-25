import React from 'react'

const Signinform = () => {
  return (
    <>
     <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account? <a >Sign In</a></span>
        </div>
        <div className="form">
        <form>
          <input type="text" name="username" id="username" placeholder="UserName" />
          <input type="email" name="email" placeholder="Email" id="email" />
          <input type="password" name="password" placeholder="Password" id="password" />
          </form>
          <button className='btn-hover color-9'>Sign Up</button>
        </div>
        <div className="card_terms">
            <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
        </div>
      </div>
    </div>
    </>
)
}

export default Signinform