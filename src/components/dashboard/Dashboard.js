import React, { Component } from "react"
import ProjectList from "../projects/ProjectList"
import Notifications from "./Notifications"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { projects } = this.props
    return (
      <div className="container">
        <div className="row">
          <div className="col 12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offser-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    // in the console we have firestore and and ordered
    // ordered data is from the firestore we need to take that data
    projects: state.firestore.ordered.projects
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)