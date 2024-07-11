import React from 'react'
import '../index.css'

export const Login = () => {
  return (
    // <section class="container forms">
    <div class="form login">
        <div class="form-content">
            <header>Login</header>
            <form action="#">
                <div class="field input-field">
                    <input type="email" placeholder="Email" class="input"/>
                </div>
                <div class="field input-field">
                    <input type="password" placeholder="Password" class="password"/>
                    <i class='bx bx-hide eye-icon'></i>
                </div>
                <div class="form-link">
                    <a href="#" class="forgot-pass">Forgot password?</a>
                </div>
                <div class="field button-field">
                    <button>Login</button>
                </div>
            </form>
            <div class="form-link">
                <span>Don't have an account? <a href="Signup.jsx" class="link signup-link">Signup</a></span>
            </div>
        </div>
        <div class="line"></div>
        <div class="media-options">
            <a href="#" class="field facebook">
                <i class='bx bxl-facebook facebook-icon'></i>
                <span>Login with Facebook</span>
            </a>
        </div>
        <div class="media-options">
            <a href="#" class="field google">
                <img src="#" alt="" class="google-img"/>
                <span>Login with Google</span>
            </a>
        </div>
    </div>
  )
}