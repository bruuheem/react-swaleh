import React from "react";
import './LoginForm.css'
import Background from "../Background/Background";
import { Link } from "react-router-dom";
// wee commentaire vrai les zooms
const LoginForm = ({onclick1 , handleLogin , onclick3 }) => {
  return (
    <div>
<div >
    <Background />
      <div className='center'>
      <img src='/logo2(1).svg' alt='cv chweya'  className="hello"></img>
        <form >
        <h1>Login</h1>
          <div className='txt_field'>
              <input type="text" required  />
              <label>Email</label>
              <span></span>
          </div>
          <div className='txt_field'>
              <input type="password" required />
              <label>Password</label>
              <span></span>
          </div>

        <div className='pass' onClick={onclick3}>Forgot password?</div>
        <Link to="/doc"><input  type="submit" value="Login"></input></Link>
          <div className='signup_link' >
           Not a member?  <Link to="/register"> Sign up </Link>
            </div>
        
        </form>


      </div>

    </div>
    </div>
  )
}

export default LoginForm