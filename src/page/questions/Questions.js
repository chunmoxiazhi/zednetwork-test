import React, { useState } from 'react'
import Message from './Message'
import Question from './Question'
import Result from './Result'
import Calculator from '../../components/calculator/Calculator'
import { MATH_QUESTIONS } from '../../config/mock_data'
import { SUBMIT_STATUS } from '../../config/constants'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Landing () {
  const [calculateValue, setCalculateValue] = useState('')
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  // Determines which question to display
  const activeQuestion = MATH_QUESTIONS[activeQuestionIndex]
  // Determine whether show score
  const shouldShowResult = MATH_QUESTIONS.length === activeQuestionIndex

  // Triggerd by 'skip' or success submission
  const goToNextQuestion = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1)
    setSubmitStatus(null)
  }

  const onChangeAnswer = (e) => {
    const newAnswers = {
      ...answers,
      [activeQuestion.id]: Number(e.target.value)
    }
    setAnswers(newAnswers)
  }

  // Determines either the answer is correct or incorrect
  const onSubmitAnswer = () => {
    const status = answers[activeQuestion.id] === activeQuestion.answer ? SUBMIT_STATUS.SUCCESS : SUBMIT_STATUS.FAILED
    setSubmitStatus(status)
  }

  const getTotalScore = () => {
    return MATH_QUESTIONS.reduce((score, question) => {
      const answer = answers[question.id]
      if (answer === question.answer) return score + 1
      return score
    }, 0)
  }

  const onTryAgain = () => {
    setCalculateValue('')
    setActiveQuestionIndex(0)
    setAnswers({})
    setSubmitStatus(null)
  }

  return (
    <section className="containe layout">
      <Message
        status={submitStatus}
        solve={activeQuestion && activeQuestion.solve}
        onClose={goToNextQuestion}
      />
      <div className="row questions-container">
        <section className="col-sm-6 questions-left">
          {!shouldShowResult && (
            <Question
              desc={activeQuestion.desc}
              answer={answers[activeQuestion.id] || null}
              onChangeAnswer={onChangeAnswer}
              onSubmitAnswer={onSubmitAnswer}
            />
          )}
          {!shouldShowResult && (
            <div className="questions-actions">
              <h5>{`${activeQuestionIndex + 1} out of ${MATH_QUESTIONS.length}`}</h5>
              <button onClick={goToNextQuestion}>Skip</button>
            </div>
          )}
          {shouldShowResult && (
            <Result
              score={getTotalScore()}
              total={MATH_QUESTIONS.length}
              onTryAgain = {onTryAgain}
            />
          )}
        </section>
        <section className="col-sm-6 questions-right">
          <Calculator result={calculateValue} setResult={setCalculateValue} />
        </section>
      </div>
    </section>
  )
}
