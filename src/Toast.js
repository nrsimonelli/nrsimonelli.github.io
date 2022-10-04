import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Toast = ({ open, message, error, setToast }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ open: false, message: '', error: false })
    }, 3500)

    return () => {
      clearTimeout(timer)
    }
  }, [open, setToast])

  return open ? (
    <div className={'toast-root'}>
      <div className={error ? 'toast-container error' : 'toast-container'}>
        <div>{message}</div>
        <div
          className='toast-close'
          onClick={() => setToast({ open: false, message, error })}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  ) : null
}

export default Toast
