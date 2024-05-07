import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [passwordvalid, setpassword]=useState("");
  const [numbervalid, setnumber]=useState("false");
  const [charvalid, setchar]=useState("false");
  const [length, setlength]=useState("8");
  const password_generator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numbervalid){
      str+="0123456789"
    }
    if(charvalid){
      str+="!@#$%^&*()"
    }
     for(i=1;i<Array.length;i++){
      let char=Math.floor(Math.random*str.length+1)
      pass=str.charAt(char);
     }
     setpassword(pass)
  },[passwordvalid,numbervalid,charvalid,setpassword,length]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 text-orange-500 bg-gray-800'>
       <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" className='outline-none w-full py-2 px-3' value={passwordvalid}  placeholder='Enter password' readOnly/>
        </div>
        <button className='bg-pink-200 py-2 px-6 outline-none'>Copy</button>
        <div className='flex text-sm gap-x-2 my-6'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} onChange={(e)=>{setlength(e.target.value)}} className='cursor-pointer'/>
            <label>Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App