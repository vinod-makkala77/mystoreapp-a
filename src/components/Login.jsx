import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Login(){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const[mssg,setMssg]=useState();
    const handleLogin=()=>{
        if(email=="vinod@gmail.com" && password=="123"){        
            setMssg(email);
        }
        else{
            setMssg("Login Failed");
        }
    }
    return(
        <div className="login">
            <h1>Login</h1>
            {mssg}
          <p><input type="text" placeholder="Email Id" onChange={(e)=>setEmail(e.target.value)}></input></p>
          <p>  <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input></p>
            {/* <input type="password" placeholder="Password"></input>/ */}
          <p>  <button onClick={handleLogin}>Login</button></p>
            <p><Link to="../register">Create Account</Link></p>
        </div>
    );
}