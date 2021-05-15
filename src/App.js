import React, { useEffect } from 'react';
import './css/main.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import EmailIcon from '@material-ui/icons/Email';
// import FlashOnIcon from '@material-ui/icons/FlashOn';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const firstName = ['N', 'i', 'c', 'h', 'o', 'l', 'a', 's', ' '];
  const lastName = ['S', 'i', 'm', 'o', 'n', 'e', 'l', 'l', 'i'];

  return (
    <div className='root'>
      <div className='min-h-screen flex justify-start items-center wave-1'>
        <div className='nav-container bg-secondary'>
          <div className='nav-content bg-secondary flex-row justify-between items-center'>
            <div>Title</div>
            <div>links</div>
            <div>icons</div>
          </div>
        </div>

        <div
          id='title'
          className='hero-container flex justify-around'
        >
          <div className='hero-content container'>
            <span data-aos='zoom-in-left' data-aos-delay='300'>
              Hello,{' '}
            </span>
            <span data-aos='zoom-in' data-aos-delay='900'>
              my name is
            </span>
            <h1>
              {firstName.map((i, x) => (
                <span
                  data-aos='fade-in'
                  data-aos-delay={x * 150 + 1500}
                >
                  {i}
                </span>
              ))}
              {lastName.map((i, x) => (
                <span
                  data-aos='fade-in'
                  data-aos-delay={x * 150 + 1500}
                >
                  {i}
                </span>
              ))}
            </h1>

            <span
              data-aos='fade-up'
              data-aos-delay='2000'
              data-aos-duration='3000'
            >
              clean code{' '}
            </span>
            <span
              data-aos='fade-up'
              data-aos-delay='1000'
              data-aos-duration='3000'
            >
              elegant design
            </span>
          </div>
          <div className='hero-content'>
            <div
              className='action'
              data-aos='zoom-out'
              data-aos-delay='3000'
              data-aos-anchor-placement='#title'
            >
              <a href='#skills'>More</a>
            </div>
          </div>
        </div>
      </div>
      <div className='skills min-h-screen flex justify-start items-center'>
        the bulk content
      </div>
      <div className='skills min-h-screen flex justify-start items-center wave-3'>
        <div id='skills'>Skills</div>
        <div
          className='action'
          data-aos='zoom-out'
          data-aos-delay='3000'
          data-aos-anchor-placement='#title'
        >
          <a href='#portfolio'>More</a>
        </div>
      </div>
      <div className='skills min-h-screen flex justify-start items-center'>
        the bulk content
      </div>
      <div
        id='portfolio'
        className='skills min-h-screen flex justify-start items-center wave-2'
      >
        Portfolio
      </div>
    </div>
  ); // end return
};

export default App;
