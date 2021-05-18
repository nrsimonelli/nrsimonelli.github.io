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
    <div className='about flex justify-center items-center'>
      <div className='container about-container b flex flex-1 justify-start items-center'>
        <div className='about-title'>About</div>

        <div className='about-icon-container flex-row b justify-center items-center'>
          <div className='about-icon'>
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
          <div className='about-icon'>
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
          <div className='about-icon'>
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
          <div className='about-icon'>
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
          <div className='about-icon'>
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
          <div className='about-icon'>
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
