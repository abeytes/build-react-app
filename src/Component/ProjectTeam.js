import React, { Component } from 'react';

class ProjectTeam extends Component {
 
  render() {
    return (
      <li className="Project">
        <strong>{ this.props.project.team} = {this.props.project.city}</strong>
      </li>
    );
  }
}

export default ProjectTeam;