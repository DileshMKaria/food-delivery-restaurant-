import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {
 const [currState,setCurrState] = useState("sign up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container' >
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className="login-popup-inputs">
            {currState=== "Login"?<></>:<input type='text' placeholder='your name' required></input>}
            
            <input type='email' placeholder='your email' required></input>
            <input type='password' placeholder='password' required></input>
        </div>
        <button> {currState==="Sign up"?"create account":"Login"}</button>
        <div className='login-popup-condition'> 
            <input type='checkbox' required></input>
            <p> by continuing, i agree to the terms of use privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>creatye a new account?<span onClick={()=>setCurrState("Sign up")}>click here</span></p>
        :<p>already have an account<span onClick={()=> setCurrState("Login")}>login here</span></p>
        } 
      </form>
    </div>
  )
}

export default LoginPopup
