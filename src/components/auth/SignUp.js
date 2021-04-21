import React, { Component } from "react"
import { Card, Button, Form,} from "react-bootstrap"
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
    console.log([e.target.id])
    console.log(e.target.value)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container small center align">
        <Card>
          <Card.Body>
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

export default SignUp
