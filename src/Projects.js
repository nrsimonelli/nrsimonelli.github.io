import React from 'react';

const Projects = () => {
  return (
    <div id='work' className='project-root'>
      <div className='project-container container'>
        <div className='project-title'>Works</div>
        <div className='project-card-container break-rev'>
          <div className='project-card-image wave-2'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>Title</div>
            <div className='project-card-detail-subtitle'>
              sub title text
            </div>
            <a className='project-card-button button' href='/'>
              View
            </a>
          </div>
        </div>
        <div className='project-card-container break-reg'>
          <div className='project-card-image wave-3'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>Title</div>
            <div className='project-card-detail-subtitle'>
              sub title text
            </div>
            <a className='project-card-button button' href='/'>
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
