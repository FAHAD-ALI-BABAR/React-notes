import React from 'react'
function Basic() {
    function Car(props) {
        return <li><h2>{props.id}</h2>I am a {props.brand }</li>;
      }
      
      function Garage() {
        const cars = [
          {id: 1, brand: 'Ford'},
          {id: 2, brand: 'BMW'},
          {id: 3, brand: 'Audi'}
        ];
  return (
    <>
         <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car id={car.id} brand={car.brand} />)}
      </ul>
    </>
  )
}
return <Garage/>
}

export default Basic