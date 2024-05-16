import React, { useState } from 'react'
function Basic() {
//     function Car(props) {
//         return <li><h2>{props.id}</h2>I am a {props.brand }</li>;
//       }
      
//       function Garage() {
//         const cars = [
//           {id: 1, brand: 'Ford'},
//           {id: 2, brand: 'BMW'},
//           {id: 3, brand: 'Audi'}
//         ];
//   return (
//     <>
//          <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car id={car.id} brand={car.brand} />)}
//       </ul>
//     </>
//   )
// }
function Formhandling(){
  const[name,adjustname]=useState("");
  const submitvalue=(event)=>{
    event.preventDefault();
    alert(`your first name is: ${name}`)
  }
  return(
    <>
    <form onSubmit={submitvalue}>
    <h1>here is your form:</h1>
    <label>First Name:
    <input type="text" value={name} onChange={(e)=> adjustname(e.target.value)}/>
    <input type="submit"/>
    </label>
    </form>
    </>
  )
}
return <Formhandling/>
}

export default Basic