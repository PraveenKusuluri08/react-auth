import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

export class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col 12 m6">
      <ProjectList/>
          </div>
            <div className="col s12 m5 offser-m1">
              <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
