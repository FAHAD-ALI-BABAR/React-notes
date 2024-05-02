const container=document.querySelector("#root");
function reactrender(reactobject,container){
    const element= document.createElement(reactobject.type);
    element.innerHTML=reactobject.children;
    for(let prop in reactobject.props){
     if(prop==="children"){
        continue;
     }
     element.setAttribute(prop,reactobject.props[prop]);
    }
    container.appendChild(element);
 }
const reactobject={
    type:"fahad",
    props:{
        href:"https://www.google.com/",
        target:"_blank"
    },
     children:"click me to go to google"
}

reactrender(reactobject,container);