import React from 'react'
import './css/main.css'

const Connect = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      id='connect'
      className='connect-root min-h-screen flex justify-center items-center wave-1'
    >
      <div className='connect-container container flex justify-between min-h-screen items-center'>
        <div className='connect-title'>Let's Connect</div>
        <form
          id='fs-frm'
          className='form-root'
          name='simple-contact-form'
          accept-charset='utf-8'
          action='https://formspree.io/f/{form_id}'
          method='post'
        >
          <fieldset id='fs-frm-name' className='fieldset'>
            <label for='full-name' className='fieldset-label'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              id='full-name'
              className='fieldset-input'
              placeholder='First and Last'
              required=''
            />
          </fieldset>
          <fieldset id='fs-frm-email' className='fieldset'>
            <label for='email-address' className='fieldset-label'>
              Email Address
            </label>
            <input
              type='email'
              name='_replyto'
              id='email-address'
              className='fieldset-input'
              placeholder='email@domain.tld'
              required=''
            />
          </fieldset>
          <fieldset id='fs-frm-msg' className='fieldset'>
            <label for='message' className='fieldset-label msg-label'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='fieldset-input msg-text'
              placeholder='Your message...'
              required=''
            />
          </fieldset>
          <input
            type='hidden'
            name='_subject'
            id='email-subject'
            value='Contact Form Submission'
          />
          <input type='submit' value='Send' className='submit-button button' />
        </form>

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
