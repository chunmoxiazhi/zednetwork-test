import React from 'react'
import PropTypes from 'prop-types'

export default function Question ({
  desc,
  answer,
  onChangeAnswer,
  onSubmitAnswer
}) {
  Question.propTypes = {
    desc: PropTypes.string,
    answer: PropTypes.number,
    onChangeAnswer: PropTypes.func,
    onSubmitAnswer: PropTypes.func
  }

  return (
    <>
      <h3 id="question-desc">{desc}</h3>
      <div className="questions-answer">
        <input
          type="number"
          placeholder="(Numbers Only)"
          value={answer || ''}
          onChange={onChangeAnswer}
        />
        <button onClick={onSubmitAnswer} disabled={!answer}>
          Submit
        </button>
      </div>
    </>
  )
}
