import React from 'react';

const Projects = () => {
  return (
    <div id='work' className='project-root'>
      <div className='project-container container'>
        <div className='project-title'>Works</div>
        <div className='project-card-container box'>
          <div className='project-card-image wave-2'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>Title</div>
            <div className='project-card-detail-subtitle'>
              sub title text
            </div>
            <div className='project-card-button button'>View</div>
          </div>
        </div>
        <div className='project-card-container box'>
          <div className='project-card-image wave-3'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>Title</div>
            <div className='project-card-detail-subtitle'>
              sub title text
            </div>
            <div className='project-card-button button'>View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
