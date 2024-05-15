import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //***************************************USESTATE******************************************8 (it reflects changes in application's UI) */
   const [color, setcolor] = useState("")
  // const [car,setcar]=useState({
  //   name:"ford",
  //   color:"red",
  //   model:"1996"
  // })
  // const changecolor=()=>{
  //   setcar((previous)=>{
  // return {...previous, color:"yellow"}
  //   })
  // }

  //-----------------------------------------USEEFFECT-------------------------------------------(it is used to fetch data,change data when the component renders)

  return (
    <>
    {/*****************************************USESTATE***************************************************** */ }
    {/* <div style={{width:200, height:100, backgroundColor:color}}></div>
    <button onClick={()=>{setcolor("blue")}} style={{backgroundColor:"blue"}}>click me</button> */}
    {/* <p>the color of your car is {car.color} </p>
    <p>the new color is <button onClick={changecolor}>click</button></p> */}

    {/*------------------------------------------USEEFFECT---------------------------------------- */}
      </>
  )
}

export default App
