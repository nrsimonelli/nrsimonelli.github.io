import React from 'react'
import './css/main.css'

const Connect = () => {
  return (
    <div
      id='connect'
      className='connect-root min-h-screen flex justify-center items-center wave-1'
    >
      <div className='connect-container container flex justify-between min-h-screen items-center'>
        <div className='connect-title'>Let's Connect</div>

        <a
          className='connect-button button'
          href='mailto:nrsimonelli@gmail.com?subject=Development Inquiry'
        >
          Contact
        </a>
        <div className='connect-footer'>
          Developed by{' '}
          <a
            href='https://github.com/nrsimonelli'
            target='_blank'
            rel='noopener noreferrer'
          >
            nrsimonelli
          </a>
          , 2022
        </div>
      </div>
    </div>
  ) // end return
}

export default Connect
