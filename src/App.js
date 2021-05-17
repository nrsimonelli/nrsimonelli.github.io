import React, { useEffect, useRef } from 'react';
import './css/main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import anime from 'animejs';

import About from './About';
import Skills from './Skills';
import Connect from './Connect';

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
      duration: 4500,
      loop: false,
      d: [
        { value: [data1, data3] },
        { value: data5 },
        { value: data13 },
        { value: data10 },
      ],
    });
  }, []);

  const firstName = ['N', 'i', 'c', 'h', 'o', 'l', 'a', 's', ' '];
  const lastName = ['S', 'i', 'm', 'o', 'n', 'e', 'l', 'l', 'i'];

  const waveEleven = (
    <svg className='morph' viewBox='0 0 900 600' width='100'>
      <path
        d='M0 131L25 123.7C50 116.3 100 101.7 150 104.5C200 107.3 250 127.7 300 130.5C350 133.3 400 118.7 450 111.7C500 104.7 550 105.3 600 113.3C650 121.3 700 136.7 750 140.7C800 144.7 850 137.3 875 133.7L900 130L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z'
        fill='#c1c1c1'
        stroke-linecap='round'
        stroke-linejoin='miter'
      ></path>
    </svg>
  );

  const data1 =
    'M0 210L25 230C50 250 100 290 150 310.5C200 331 250 332 300 335.7C350 339.3 400 345.7 450 347.5C500 349.3 550 346.7 600 344C650 341.3 700 338.7 750 335.7C800 332.7 850 329.3 875 327.7L900 326L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data2 =
    'M0 275L25 277.2C50 279.3 100 283.7 150 297.3C200 311 250 334 300 343.5C350 353 400 349 450 321.7C500 294.3 550 243.7 600 212C650 180.3 700 167.7 750 165.5C800 163.3 850 171.7 875 175.8L900 180L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data3 =
    'M0 245L25 244.3C50 243.7 100 242.3 150 224.2C200 206 250 171 300 169.7C350 168.3 400 200.7 450 219C500 237.3 550 241.7 600 230.5C650 219.3 700 192.7 750 178.5C800 164.3 850 162.7 875 161.8L900 161L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data4 =
    'M0 218L25 222.5C50 227 100 236 150 248.5C200 261 250 277 300 291.8C350 306.7 400 320.3 450 293.7C500 267 550 200 600 194.7C650 189.3 700 245.7 750 266C800 286.3 850 270.7 875 262.8L900 255L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data5 =
    'M0 143L25 152.5C50 162 100 181 150 192.2C200 203.3 250 206.7 300 194.5C350 182.3 400 154.7 450 144.7C500 134.7 550 142.3 600 162.5C650 182.7 700 215.3 750 228.3C800 241.3 850 234.7 875 231.3L900 228L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data6 =
    'M0 388L25 387.8C50 387.7 100 387.3 150 382.3C200 377.3 250 367.7 300 369.2C350 370.7 400 383.3 450 390.5C500 397.7 550 399.3 600 380.8C650 362.3 700 323.7 750 300.3C800 277 850 269 875 265L900 261L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data10 =
    'M0 98L25 104.8C50 111.7 100 125.3 150 129.3C200 133.3 250 127.7 300 122.2C350 116.7 400 111.3 450 108.2C500 105 550 104 600 107.5C650 111 700 119 750 126.2C800 133.3 850 139.7 875 142.8L900 146L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data11 =
    'M0 131L25 123.7C50 116.3 100 101.7 150 104.5C200 107.3 250 127.7 300 130.5C350 133.3 400 118.7 450 111.7C500 104.7 550 105.3 600 113.3C650 121.3 700 136.7 750 140.7C800 144.7 850 137.3 875 133.7L900 130L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data12 =
    'M0 156L25 153C50 150 100 144 150 145.2C200 146.3 250 154.7 300 145.5C350 136.3 400 109.7 450 106.3C500 103 550 123 600 129.2C650 135.3 700 127.7 750 131C800 134.3 850 148.7 875 155.8L900 163L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data13 =
    'M0 138L25 129.5C50 121 100 104 150 98.5C200 93 250 99 300 111.5C350 124 400 143 450 149.7C500 156.3 550 150.7 600 143.7C650 136.7 700 128.3 750 118.7C800 109 850 98 875 92.5L900 87L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data14 =
    'M0 144L25 136C50 128 100 112 150 113.8C200 115.7 250 135.3 300 133.3C350 131.3 400 107.7 450 108.8C500 110 550 136 600 136.7C650 137.3 700 112.7 750 103.8C800 95 850 102 875 105.5L900 109L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';
  const data15 =
    'M0 157L25 153.3C50 149.7 100 142.3 150 128.7C200 115 250 95 300 95.7C350 96.3 400 117.7 450 122.3C500 127 550 115 600 115.7C650 116.3 700 129.7 750 128.8C800 128 850 113 875 105.5L900 98L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z';

  return (
    <div className='root'>
      <div className='min-h-screen flex justify-start items-center'>
        <div className='nav-container z-1'>
          <div className='nav-content flex-row justify-between items-center'>
            <div>Title</div>
            <div>links</div>
            <div>icons</div>
          </div>
        </div>

        <div
          id='title'
          className='hero-container flex justify-around'
        >
          {waveEleven}
          <div className='hero-content container z-1'>
            <span data-aos='zoom-in-left' data-aos-delay='300'>
              Hello,{' '}
            </span>
            <span data-aos='zoom-in' data-aos-delay='900'>
              my name is
            </span>
            <h1>
              {firstName.map((i, x) => (
                <span
                  key={'first-' + x}
                  data-aos='fade-in'
                  data-aos-delay={x * 150 + 1500}
                >
                  {i}
                </span>
              ))}
              {lastName.map((i, x) => (
                <span
                  key={'last-' + x}
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
      <About />
      <Skills />

      <Connect />
    </div>
  ); // end return
};

export default App;
