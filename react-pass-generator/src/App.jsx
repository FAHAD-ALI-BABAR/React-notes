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
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
       <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" className='outline-none w-full py-1 px-3' value={passwordvalid}  placeholder='Enter oassword' readOnly/>
        </div>
      </div>
    </>
  )
}

export default App
