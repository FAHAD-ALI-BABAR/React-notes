import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <>
        
        <h1>i study in arid agricultire university rawalpindi!!!!!????????</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint inventore placeat non beatae aperiam at qui. Odio, culpa vitae? Delectus provident, maiores inventore aperiam quos soluta tempore corporis totam?</p>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quod?</p>
        </>
    )
}
//this is the object we created to pass
const name="fahad ali babar";
const google=(
    <a href='https://www.google.com'>visit google, {name}</a>
    
)
const heading=ReactDOM.createRoot(document.getElementById('root'));
heading.render(
  //this is how you call object
    google
    // <App/>
  
)

