import React, { Component } from 'react'
import { Card, Button, Form, Alert } from "react-bootstrap"
class Signin extends Component {
  state={
   email:"",
   password:""
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.type] :e.target.value
    })
    console.log([e.target.type])
    console.log(e.target.value);
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      
      <div className="container small ">
      <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Signin</h2>
        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" id="email" required onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" required onChange={this.handleChange}/>
          </Form.Group>
          <Button className="w-100" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
      )
  }
}

export default Signin
