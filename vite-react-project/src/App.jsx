import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")
  return(
    <>
    <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
        <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setcolor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
        <button onClick={()=>setcolor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>
        <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={()=>setcolor("#E6E6FA")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#E6E6FA"}}>Lavendar</button>
        <button onClick={()=>setcolor("#ffffff")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"white"}}>White</button>
        <button onClick={()=>setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default App
