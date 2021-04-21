  
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInlinks = () => {
  return (
    <div>
      <ul className="right dark ">
        <li><NavLink to='/'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn-floating waves-effect waves-light">KP</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInlinks
