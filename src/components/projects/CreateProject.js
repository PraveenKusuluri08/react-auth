import React, { Component } from "react"
import {connect } from "react-redux"
import { Card, Button, Form, Alert } from "react-bootstrap"
import {createProject} from "../../store/actions/actionCreators"
import { Redirect } from "react-router"
class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
    console.log([e.target.id])
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
   // e.preventDefault()
    //console.log(this.state)
    this.props.createProject(this.state)
  }

  render() {
    const{auth}=this.props

    if(!auth.uid) return <Redirect to ="/signin/"/>

    return (
      <div className="container small ">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Create Project</h2>
            {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" id="title" required onChange={this.handleChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Project Content</Form.Label>
                <Form.Control id="content" as="textarea" rows={3} required onChange={this.handleChange} />
              </Form.Group>
              <Button className="w-100" type="submit">
                Create
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    auth :state.firebase.auth
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    createProject : (project)=>dispatch(createProject(project))
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (CreateProject)
