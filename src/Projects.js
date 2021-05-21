import React from 'react';

const Projects = () => {
  return (
    <div id='work' className='project-root'>
      <div className='project-container container'>
        <div className='project-title'>Recent Works</div>
        <div className='project-card-container break-rev'>
          <div className='project-card-image project-1 wave-stack'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Heroic Data Vision
            </div>
            <div className='project-card-detail-subtitle'>
              Web Application, NLP, Redux Sagas
            </div>
            <a
              className='project-card-button button-1 button'
              href='https://heroic-winds.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </div>
        <div className='project-card-container break-reg'>
          <div className='project-card-image project-2'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Slow Coffee
            </div>
            <div className='project-card-detail-subtitle'>
              Mobile, Ignite, Delicious
            </div>
            <a
              className='project-card-button button-2 button'
              href='#work'
            >
              Coming Soon
            </a>
          </div>
        </div>
        <div className='project-card-container break-rev'>
          <div className='project-card-image project-3'></div>
          <div className='project-card-detail'>
            <div className='project-card-detail-title'>
              Scythe Bidder
            </div>
            <div className='project-card-detail-subtitle'>
              Web Application, Sockets, Dark Mode
            </div>
            <a
              className='project-card-button button-3 button'
              href='https://scythe-bidder.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
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
              Web Design, Sass, Programmatic
            </div>
            <a
              className='project-card-button button-4 button'
              href='https://dark-magic.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
