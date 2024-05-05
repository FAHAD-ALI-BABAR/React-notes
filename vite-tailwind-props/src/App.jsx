import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    name:"fahad",
    age:"18"
  }

  return (
    <>
      <button >Tailwind</button>
      { <Cart username="fahadalibabar12345" channel="fahadalibabar" someObje={obj} /> }
      
    </>
  )
}

export default App
