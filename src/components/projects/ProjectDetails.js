import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { Redirect } from "react-router"
import { compose } from "redux"
import moment from "moment"
const ProjectDetails = (props) => {
  // route information to the particular id
  const { project,auth } = props

  if(!auth.uid) return <Redirect to ="/signin/"/>

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              {project.autherFirstName} {project.autherLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    <div className="container">
      <p>Loading Project.......</p>
    </div>
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  // data which is getting from the firestore collections and list of present in the firestore
  const projects = state.firestore.data.projects
  // for individual project
  const project = projects ? projects[id] : null
  return {
    // project property on the props and project property right away front line 32
    project: project,
    auth :state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails)
