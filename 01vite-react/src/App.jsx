import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './code'

function App() {
  //this is the way to access variable
const variable="fahad ali babar";
  return (
    <>
    <Code/>
    
    <h5>{variable}</h5> 
    <p>ali</p>
    </>
  )
}


export default App

