import React, { Component } from "react"
import { Card, Button, Form, Alert } from "react-bootstrap"
import { connect } from "react-redux"
import { Redirect } from "react-router"
import { signUp } from "../../store/actions/actionCreators"
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fName: "",
    lName: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  
  }
  handleSubmit = (e) => {
    e.preventDefault()
    //  console.log(this.state)
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container small center align">
        <Card>
          <Card.Body>
            {authError ? <Alert variant="danger">{authError}</Alert> : null}
            <h2 className="text-center mb-4">Signup</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" id="fName" required onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" id="lName" required onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" required onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" required onChange={this.handleChange} />
              </Form.Group>

              <Button className="w-100" type="submit">
                SignUp
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
