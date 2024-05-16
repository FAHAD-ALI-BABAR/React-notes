import React from 'react'
import { useState } from 'react'

function Forms() {
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState("")
    const submitform=(event)=>{
      event.preventDefault();
      alert(`your name is: ${firstname+""+lastname}, 
your email is:${email},
your phone is:${phone}`
        
      )
    }

  return (
    <>
    <form onSubmit={submitform}>
    <label> First name:
        <input type="text" value={firstname} onChange={(e)=> setfirstname(e.target.value)}/>
    </label><br/>
    <label> Last name:
    <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
</label><br/>
<label> Email:
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
    </label><br/>
    <label> Phone:
    <input type="phone" value={phone} onChange={(e)=>setphone(e.target.value)}/>
</label><br/>
<input type="submit"/>
</form>
</>
  )
}

export default Forms