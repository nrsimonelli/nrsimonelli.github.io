import React from 'react';
import './global.css';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import EmailIcon from '@material-ui/icons/Email';
// import FlashOnIcon from '@material-ui/icons/FlashOn';

const App = () => {
  return (
    <div className='root'>
      <div className='display flex justify-start items-center'>
        <div className='container px min-h-screen mx-auto sm md lg xl bg-primary text-primary-lighter'>
          <div>Hello, my name is</div>
          <div className='text-8xl'>Nicholas</div>
          <div className='text-8xl'>Simonelli</div>
          <div className='subtitle-text'>
            clean code and elegant design
          </div>
        </div>
      </div>
    </div>
  ); // end return
};

export default App;
