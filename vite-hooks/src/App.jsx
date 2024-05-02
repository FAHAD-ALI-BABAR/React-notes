import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCounter]=useState(0)
  const addvalue=()=>{
    setCounter(count=count+1);
    
  }
  
  const removevalue=()=>{
      if(count>0){
        setCounter(count=count-1);
      }
      else{
        count=0;
      }
  }

  return (
    <>
     <h1>FAHAD-ALI-BABAR</h1>
     <h2>Count vaue is: {count} </h2>
     <button onClick={addvalue}>Add value</button><br/>
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
