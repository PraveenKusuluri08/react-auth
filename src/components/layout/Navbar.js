import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from "react-redux"
const Navbar = (props) => {
  const { authStatus } = props
  const links = authStatus.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="wrapper">
        <Link to="/" className="left bg blue">
          PRAVEEN
        </Link>
        {links}
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    authStatus: state.firebase.auth,
  }
}
export default connect(mapStateToProps)(Navbar)
