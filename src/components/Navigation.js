import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navigation() {

  let linkHighliter=(obj)=>{
    if(obj.isActive){
      return {backgroundColor:"red",color:"yellow"}   
    }
  }
  return (
    <nav className='App nav'>

         <NavLink style={(obj)=>{
return linkHighliter(obj);
}} to ="/home">Home</NavLink>
        <NavLink style={(obj)=>{
return linkHighliter(obj);
}} to ="/">Login</NavLink>
        <NavLink style={(obj)=>{

        }} to ="/signup">Signup</NavLink>
    </nav>
  )
}

export default Navigation;