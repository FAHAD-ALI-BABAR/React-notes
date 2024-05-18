import React from 'react'

function Properties(props){
    return <h2>my car is {props.brand}</h2>
}
function Cars(){
    const car=[{name:"ford",color:"blue"}]

    return (
        <>
        <h1> {car.map((e)=><Properties brand={e.name}/>)}</h1>
        </>
    )
}
export default Cars

