import React, { useState } from "react";
import "./Register.css";

const Register = () => {

const [userName,setUserName]=useState("");
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const register=(e)=>{
e.preventDefault();

alert("Registration successful");
};

return(

<div style={{width:"50%",margin:"auto"}}>

<h1>Sign Up</h1>

<form onSubmit={register}>

<div>
<input
type="text"
placeholder="Username"
onChange={(e)=>setUserName(e.target.value)}
/>
</div>

<div>
<input
type="text"
placeholder="First Name"
onChange={(e)=>setFirstName(e.target.value)}
/>
</div>

<div>
<input
type="text"
placeholder="Last Name"
onChange={(e)=>setLastName(e.target.value)}
/>
</div>

<div>
<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>
</div>

<div>
<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>
</div>

<br/>

<button type="submit">
Register
</button>

</form>

</div>

);

};

export default Register;