import React, { useState } from 'react'
function Basic() {

function Formhandling(){
  const[name,adjustname]=useState("");
  const submitvalue=(event)=>{
    event.preventDefault();
    alert(`your first name is: ${name}`)
  }
  return(
    <>
    <form >
    <h1>here is your form:</h1>
    <label>First Name:
    <input type="text" value={name} onChange={(e)=> adjustname(e.target.value)}/>
    <input type="submit" onClick={submitvalue}/>
    </label>
    </form>
    </>
  )
}
return <Formhandling/>
}

export default Basic