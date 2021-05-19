import React from 'react';
import {
  AiFillFire,
  AiFillBug,
  AiFillHeart,
  AiFillThunderbolt,
  AiFillBulb,
  AiFillNotification,
} from 'react-icons/ai';

const About = () => {
  return (
    <div
      id='about'
      className='about flex justify-center items-center'
    >
      <div className='container about-container flex flex-1 justify-start items-center'>
        <div className='about-title'>About</div>

        <div className='about-icon-container flex-row justify-center items-center'>
          <div
            className='about-icon'
            data-aos='zoom-in-right'
            data-aos-delay='300'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillFire className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
          <div
            className='about-icon'
            data-aos='zoom-in-down'
            data-aos-delay='600'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillBug className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
          <div
            className='about-icon'
            data-aos='zoom-in-left'
            data-aos-delay='900'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillHeart className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
          <div
            className='about-icon'
            data-aos='zoom-in-right'
            data-aos-delay='1200'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillThunderbolt className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
          <div
            className='about-icon'
            data-aos='zoom-in-up'
            data-aos-delay='1500'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillNotification className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
          <div
            className='about-icon'
            data-aos='zoom-in-left'
            data-aos-delay='1800'
            data-aos-duration='900'
            data-aos-anchor-placement='#about'
          >
            <div className='about-icon-image-container flex justify-center items-center'>
              <AiFillBulb className='about-icon-image' />
            </div>
            <div className='about-icon-title'>
              <div>Title</div>
            </div>
            <div className='about-icon-text'>
              <div>
                Select text describing the logo in a way that adds
                detail and support. Invisible on small screens
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
