import React, { useEffect, useRef } from 'react';
import './css/main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import anime from 'animejs';

import About from './About';
import Skills from './Skills';
import Connect from './Connect';
import Projects from './Projects';

import { TiFlash } from 'react-icons/ti';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import EmailIcon from '@material-ui/icons/Email';
// import FlashOnIcon from '@material-ui/icons/FlashOn';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = anime({
      targets: '.morph > path',
      easing: 'linear',
      duration: 3000,
      loop: false,
      d: [
        { value: [data1, data3] },
        { value: data5 },
        { value: data10 },
      ],
    });
    animationRef.current = anime({
      targets: '.blue-target',
      easing: 'linear',
      duration: 3000,
      delay: 3000,
      color: [
        '#0f172a',
        '#1e293b',
        '#334155',
        '#831843',
        '#9d174d',
        '#be185d',
        '#db2777',
        '#ec4899',
        '#f472b6',
      ],
      loop: false,
    });
  }, []);

  const waveEleven = (
    <svg className='morph' viewBox='0 0 900 600' width='100'>
      <path
        d='M0 131L25 123.7C50 116.3 100 101.7 150 104.5C200 107.3 250 127.7 300 130.5C350 133.3 400 118.7 450 111.7C500 104.7 550 105.3 600 113.3C650 121.3 700 136.7 750 140.7C800 144.7 850 137.3 875 133.7L900 130L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z'
        stroke-linecap='round'
        stroke-linejoin='miter'
      ></path>
    </svg>
  );

  const data1 =
    'M0 210L25 230C50 250 100 290 150 310.5C200 331 250 332 300 335.7C350 339.3 400 345.7 450 347.5C500 349.3 550 346.7 600 344C650 341.3 700 338.7 750 335.7C800 332.7 850 329.3 875 327.7L900 326L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data3 =
    'M0 245L25 244.3C50 243.7 100 242.3 150 224.2C200 206 250 171 300 169.7C350 168.3 400 200.7 450 219C500 237.3 550 241.7 600 230.5C650 219.3 700 192.7 750 178.5C800 164.3 850 162.7 875 161.8L900 161L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data5 =
    'M0 143L25 152.5C50 162 100 181 150 192.2C200 203.3 250 206.7 300 194.5C350 182.3 400 154.7 450 144.7C500 134.7 550 142.3 600 162.5C650 182.7 700 215.3 750 228.3C800 241.3 850 234.7 875 231.3L900 228L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data10 =
    'M0 98L25 104.8C50 111.7 100 125.3 150 129.3C200 133.3 250 127.7 300 122.2C350 116.7 400 111.3 450 108.2C500 105 550 104 600 107.5C650 111 700 119 750 126.2C800 133.3 850 139.7 875 142.8L900 146L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';

  return (
    <div className='root'>
      <div className='min-h-screen flex justify-start items-center'>
        <div className='nav-container z-1'>
          <div className='nav-content container flex-row justify-between items-center'>
            <div
              className='nav-icon home'
              data-aos='zoom-out'
              data-aos-delay='3000'
            >
              <a href='/'>
                <TiFlash />
              </a>
            </div>
            <div className='nav-icon flex-row'>
              <div
                className='nav-text'
                data-aos='zoom-out'
                data-aos-delay='3000'
              >
                <a href='#about'>About</a>
              </div>
              <div
                className='nav-text'
                data-aos='zoom-out'
                data-aos-delay='3000'
              >
                <a href='#work'>Portfolio</a>
              </div>
              <div
                className='nav-text'
                data-aos='zoom-out'
                data-aos-delay='3000'
              >
                <a href='#connect'>Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div
          id='title'
          className='hero-container flex justify-center'
        >
          {waveEleven}
          <div className='hero-content hero container z-1 flex flex-1'>
            <h1>
              <span data-aos='fade-in' data-aos-delay={1500}>
                Always{' '}
                <span data-aos='fade-in' data-aos-delay={1800}>
                  Be{' '}
                </span>
              </span>
              <span data-aos='fade-in' data-aos-delay={2400}>
                Coding{' '}
              </span>
            </h1>
            <div>
              <span data-aos='zoom-in' data-aos-delay='300'>
                Hi, meet{' '}
                <a href='#about' className='name blue-target'>
                  Nick Simonelli
                </a>
              </span>
            </div>
          </div>
          <div className='hero-content action flex justify-center'>
            <div
              data-aos='zoom-out'
              data-aos-delay='3000'
              data-aos-anchor-placement='#title'
            >
              <a className='button' href='#about'>
                More
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Connect />
    </div>
  ); // end return
};

export default App;
