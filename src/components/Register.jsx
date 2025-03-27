import React from 'react'
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export default function Register() {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState({});
  const [mssg,setMssg]=useState("");
  const txtref=useRef();
  const handleSubmit=()=>{
    
    const user=emails.find((user)=>user.name===email.name);
    const user1=emails.find((user)=>user.address===email.address);
    if(!email.name || !email.address|| !email.password){  
      setMssg("Please fill all the fields");
    }
    if(user || user1){
      setMssg("Email already exists");  
      txtref.current.style.color='red';
      return;
    }else{
      setEmails([...emails,email]);
      setEmail({name:'',address:'',password:''});
    }
  };
  const handleDelete=(name)=>{
   setEmails(emails.filter((e)=>e.name!==name));
  };
  return (
    <>
    <div className='App-row'>
      <div className='App-box'>
      <h3>Registration Form</h3>
      <p><input type="text" placeholder='Enter Name'  value={email.name} onChange={(e)=>setEmail({...email,name:e.target.value})}></input></p>
      <p><input type="text" placeholder='Email address' value={email.address}  onChange={(e)=>setEmail({...email,address:e.target.value})}></input></p>
      <p><input type="password" placeholder='New password' value={email.password} onChange={(e)=>setEmail({...email,password:e.target.value})}></input></p>
      <p><button onClick={handleSubmit}>Submit</button></p>
      <h1 ref={txtref}> {mssg}</h1>
      <p><Link to="../login">Already a member? Login here!</Link></p>
    </div>
  <ol className='App-box2'>
    <h1>Registerd Details</h1>
    {emails.map((email,index)=>{
      return <li key={index}>{email.name} - {email.address} -{email.password}-<button onClick={()=>handleDelete(email.name)}>delete</button><hr></hr></li>
    })}
  </ol>
  </div>
  </>
  );
}