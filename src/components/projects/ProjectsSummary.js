import React from 'react'

const ProjectsSummary = ({project}) => {
  return (
    <div className="card z depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p className="grey-text">Project title</p>
      <p>30 augest 10pm</p>
    </div>
  </div>
  )
}

export default ProjectsSummary
