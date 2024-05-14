import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 function Car(){
    const[color,setcolor]=useState("")
     
    const addcolor=()=>{
        setcolor("blue")
    }
    useEffect(()=>{
        alert("i will change on every render")
    })
    useEffect(()=>{
        alert("i will change on first render only")
    },[])
    useEffect(()=>{
        alert("color has changed")
    },[color])
     
    return (
<>
   <button onClick={addcolor} style={{height:40, width:150, backgroundColor:'green'}}>Color is :{color}</button>
   
</>
    )
}
 export default Car