import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
const ProjectDetails = (props) => {
  // route information to the particular id
  const { project } = props
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
              <p>{project.autherId}</p>
            <div>1/01/2021</div>
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
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails)
