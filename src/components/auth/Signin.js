import React, { Component } from "react"
import { Card, Button, Form, Alert } from "react-bootstrap"
import {connect} from "react-redux"
import {signIn} from "../../store/actions/actionCreators"
class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
     console.log(this.state)
    this.props.signIn(this.state)
  }
  render() {
    const {authError}=this.props
    return (
      <div className="container small center align">
        <Card>
          <Card.Body>
            
            <h2 className="text-center mb-4">Signin</h2>
           {authError ? <Alert variant="danger">{authError}</Alert> :<Alert variant="success">Login Success</Alert>}

            <Form onSubmit={this.handleSubmit}>
            <Form.Label >
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" required onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" required onChange={this.handleChange} />
              </Form.Group>
              <Button className="w-100" type="submit">
                Login
              </Button>
            </Form.Label>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    authError :state.auth.authError
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signIn :(cred)=>dispatch(signIn(cred))
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Signin)
