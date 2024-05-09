import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [color, setcolor] = useState("")
  const [car,setcar]=useState({
    name:"ford",
    color:"red",
    model:"1996"
  })
  const changecolor=()=>{
    setcar((previous)=>{
  return {...previous, color:"yellow"}
    })
  }
    
  
 
  return (
    <>
    {/* <div style={{width:200, height:100, backgroundColor:color}}></div>
    <button onClick={()=>{setcolor("blue")}} style={{backgroundColor:"blue"}}>click me</button> */}
    <p>the color of your car is {car.color} </p>
    <p>the new color is <button onClick={changecolor}>click</button></p>
      </>
  )
}

export default App
