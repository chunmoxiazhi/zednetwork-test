import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import classNames from 'classnames'
import 'reactjs-popup/dist/index.css'
import { SUBMIT_STATUS } from '../../config/constants'
import { BsXSquare, BsCheckBox } from 'react-icons/bs'

export default function Message ({
  status,
  solve,
  onClose
}) {
  Message.propTypes = {
    status: PropTypes.string,
    solve: PropTypes.string,
    onClose: PropTypes.func
  }

  const isSuccess = status === SUBMIT_STATUS.SUCCESS
  const message = isSuccess
    ? <div className="message-content">
        <BsCheckBox/>
        <br/>
        Brilliant! You got it correct.
      </div>
    : <div className="message-content">
        <BsXSquare/>
        <br/>
        Aww... You need more practices.
      </div>

  useEffect(() => {
    const successTimer = isSuccess && setTimeout(onClose, 3000)
    return () => {
      clearTimeout(successTimer)
    }
  }, [status])

  return (
    <Popup
      id="popup"
      open={status !== null}
      modal
      closeOnDocumentClick={false}
    >
      <div className="message">
        <button className="message-close" onClick={onClose}>
          &times;
        </button>
        <h3
          className={classNames({
            'message-success': isSuccess,
            'message-failed': !isSuccess
          })}
        >
          {message}
        </h3>
        {!isSuccess && (
          <h4>{`Here is the solution: ${solve}`}</h4>
        )}
      </div>
    </Popup>
  )
}
