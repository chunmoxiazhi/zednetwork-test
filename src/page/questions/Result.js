import React from 'react'
import PropTypes from 'prop-types'
import { BsTrophy } from 'react-icons/bs'

export default function Result ({
  score,
  total,
  onTryAgain
}) {
  Result.propTypes = {
    score: PropTypes.number,
    total: PropTypes.number,
    onTryAgain: PropTypes.func
  }

  return (
    <>
      <div id="result-icon">
        <BsTrophy/>
      </div>
      <h3>{`Your final score is ${score} out of ${total}`}</h3>
      <button onClick={onTryAgain}>Try Again</button>
    </>
  )
}
