// import { Button } from "bootstrap";
import React,{useState} from "react";
import  "./EmpLogin.css"

function EmpLogin() {

  const [show,setshow] =useState(false);


  return (
    <>
  
    <div className="title">Employee Login</div>
      <form>
      <div className="conatiner">
      <label htmlFor="username">Username</label><br />
      <input type="text" className="input" paceholder="username" /><br />
      <div className="toggle">
      {
     show ? <input type="code" className='in' placeholder='enter'></input>:null
     /* <input type="authcode" className='in' placeholder='enter authcode'></input>*/
    
      }
     </div>     
       <button type="password" className="btn" onClick={() =>setshow(true)}>Password</button><span>
       <button type="Auth" className="btn" onClick={() =>setshow(true)}>AuthCode</button></span><br />
  
       <p>Other Methods</p>
       {/* <div className="login-btn"> */}
       <button type="Login" className="btn">Login</button>
       <p>Need Help?</p>
       </div>
       {/* </div> */}
      </form>
    </>
  )
}

export default EmpLogin;
