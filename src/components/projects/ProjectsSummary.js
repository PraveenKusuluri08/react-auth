import React from 'react'
import moment from "moment"
const ProjectsSummary = ({project}) => {
  return (
    <div className="card z depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>Posted by {project.authorFirstName} {project.autherLastName} </p>
      <p className="grey-text">{moment(project.createdAt.toDate()).format('llll')}</p>
    </div>
  </div>
  )
}

export default ProjectsSummary
