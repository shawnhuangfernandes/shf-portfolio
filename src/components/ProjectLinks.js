import React, { Component } from 'react';

class ProjectLinks extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="social d-flex justify-content-center project-links">
            {this.props.projectLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2`}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        );
    }
}

export default ProjectLinks;