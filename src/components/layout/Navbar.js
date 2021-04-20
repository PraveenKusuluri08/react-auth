import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

const NavBar = () => {
  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "whitesmoke", fontSize: "25px" }}>
            Praveen
          </Link>
        </Toolbar>
      </AppBar> */}

      <Navbar className="mr-auto" expand="lg" bg="dark" variant="dark">
        <Link to="/" style={{ textDecoration: "none", color: "whitesmoke", fontSize: "25px" }}>
          Praveen
        </Link>

      </Navbar>
    </>
  )
}

export default NavBar
