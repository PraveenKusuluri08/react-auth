import React from 'react'

const ProjectDetails = (props) => {
  const id =props.match.params.id
  console.log(props.match)
  return (
    <div className="container section project-details">
      <div className="card z depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>The floating circle button type in materialize framework is meant for buttons with very important functions.</p>
       </div>
       <div className="card-action gret lighten-4 grey-text">
         <div>Posted by praveen</div>
         <div>1/01/2021</div>

       </div>
      </div>
    </div>
  )
}

export default ProjectDetails
