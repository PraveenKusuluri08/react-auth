  
import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux"
import {signOut} from "../../store/actions/actionCreators"
const SignedInlinks = (props) => {
  const{signOut} =props
  return (
    <div>
      <ul className="right dark ">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={signOut}> Log Out</a></li>
        <li><NavLink to='/' className="btn-floating waves-effect waves-light">KP</NavLink></li>
      </ul>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}
export default connect(null,mapDispatchToProps) (SignedInlinks)
