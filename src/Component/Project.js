import React, { Component } from 'react';
import ProjectTeam from "./ProjectTeam";
class Project extends Component {

  render() {
    let projectTeam;
    if(this.props.project){
      projectTeam = this.props.project.map(project => { 
        return (
          <ProjectTeam key = {project.team} project= {project} />
        );
      });
    }
    return (
      <div className="Project">
        {projectTeam} 
      </div>
    );
  }
}

export default Project;