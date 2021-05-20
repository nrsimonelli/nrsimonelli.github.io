import React from 'react';

const Projects = () => {
  return (
    <div id='work' className='project-root'>
      <div className='project-container container'>
        <div className='project-title'>Works</div>
        <div className='project-card-container break-rev'>
          <div className='project-card-image project-1 wave-stack'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Heroic Data Vision
            </div>
            <div className='project-card-detail-subtitle'>
              Web Application, Redux, Sagas
            </div>
            <a className='project-card-button button' href='/'>
              View
            </a>
          </div>
        </div>
        <div className='project-card-container break-reg'>
          <div className='project-card-image project-2'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Dark Magic
            </div>
            <div className='project-card-detail-subtitle'>
              Web Design, Sass, Colors
            </div>
            <a className='project-card-button button' href='/'>
              View
            </a>
          </div>
        </div>
        <div className='project-card-container break-rev'>
          <div className='project-card-image project-3'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Dark Magic
            </div>
            <div className='project-card-detail-subtitle'>
              Web Design, Sass, Colors
            </div>
            <a className='project-card-button button' href='/'>
              View
            </a>
          </div>
        </div>
        <div className='project-card-container break-reg'>
          <div className='project-card-image project-4'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Dark Magic
            </div>
            <div className='project-card-detail-subtitle'>
              Web Design, Sass, Colors
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
