import React from 'react'
import './css/main.css'
import Toast from './Toast'
import emailjs from '@emailjs/browser'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Required' }).max(70),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Required' }).max(3000),
})

const Connect = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [toastState, setToastState] = React.useState({
    open: false,
    message: 'Message sent!',
    error: false,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })
  const {
    REACT_APP_SERVICE_ID: ID,
    REACT_APP_TEMPLATE_ID: TEMP,
    REACT_APP_PUBLIC_KEY: KEY,
  } = process.env
  const form = React.useRef()

  const switchState = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = () => {
    emailjs.sendForm(ID, TEMP, form.current, KEY).then(
      (res) => {
        setToastState({
          open: true,
          message: 'Message sent successfully!',
          error: false,
        })
        reset()
      },
      (err) => {
        setToastState({
          open: true,
          message: 'Something went wrong, please try again',
          error: true,
        })
        console.log(err.text)
      }
    )
  }

  return (
    <div
      id='connect'
      className='connect-root min-h-screen flex justify-center items-center wave-1'
    >
      <Toast
        open={toastState.open}
        message={toastState.message}
        error={toastState.error}
        setToast={setToastState}
      />
      <div className='connect-container container flex justify-between min-h-screen items-center'>
        <div className='connect-title'>Let's Connect</div>
        {isOpen && (
          <div className='overlay z-2' onClick={(e) => switchState(e)} />
        )}
        {isOpen && (
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className='form-root z-3'
          >
            <fieldset className='fieldset'>
              <label htmlFor='full-name' className='fieldset-label'>
                Full Name
              </label>
              <input
                id='full-name'
                type='text'
                name='name'
                className='fieldset-input'
                data-valid={!errors?.name}
                placeholder='First and Last'
                {...register('name', { required: true, maxLength: 70 })}
              />
            </fieldset>
            <fieldset className='fieldset'>
              <label htmlFor='email-address' className='fieldset-label'>
                Email Address
              </label>
              <input
                id='eamil-address'
                type='email'
                name='email'
                className='fieldset-input'
                data-valid={!errors?.email}
                placeholder='email@domain.tld'
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </fieldset>
            <fieldset className='fieldset'>
              <label htmlFor='message' className='fieldset-label msg-label'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                data-valid={!errors?.message}
                className='fieldset-input msg-text'
                placeholder='Your message...'
                {...register('message', { required: true, maxLength: 3000 })}
              />
            </fieldset>
            <input
              type='submit'
              value='Send'
              className='submit-button button'
            />
          </form>
        )}
        <button className='connect-button button' onClick={switchState}>
          Contact
        </button>
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
