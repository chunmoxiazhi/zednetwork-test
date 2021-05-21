import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CalculatorButton from './CalculatorButton'
import { CALCULATOR_BUTTONS, CALCULATOR_BUTTON_TYPE } from '../../config/constants'

export default function Calculator ({
  result,
  setResult
}) {
  Calculator.propTypes = {
    result: PropTypes.string,
    setResult: PropTypes.func
  }

  const [validInput, setValidInput] = useState(true)

  const calculateResult = () => {
    const value = eval(result)
    setResult(String(value))
  }

  const onClickButton = (buttonValue, buttonType) => {
    switch (buttonType) {
      case CALCULATOR_BUTTON_TYPE.NUMBER:
      case CALCULATOR_BUTTON_TYPE.ACTION:
        setResult(`${result}${buttonValue}`)
        break
      case CALCULATOR_BUTTON_TYPE.CLEAR:
        setResult('')
        break
      case CALCULATOR_BUTTON_TYPE.EQUAL:
        calculateResult()
        break
      default:
        break
    }
  }

  const onClickSubmit = (e) => {
    e.preventDefault()
    calculateResult()
  }

  const onTypeInput = (e) => {
    const input = e.target.value.trim()
    if (!input) {
      setResult('')
      return
    }
    const hasInvalidInput = input.split('').find(char => !CALCULATOR_BUTTONS.find(button => button.value === char && char !== '='))
    setValidInput(!hasInvalidInput)
    if (!hasInvalidInput) {
      setResult(input)
    }
  }

  return (
    <>
      {
        !validInput &&
        <div className="alert alert-danger" role="alert">
          Numbers and operators only!
        </div>
      }
      <form id="calculator" onSubmit={onClickSubmit}>
        <input
          type="text"
          onChange={onTypeInput}
          value={result}
        />
        {CALCULATOR_BUTTONS.map(button => {
          return (
            <CalculatorButton
              key={button.value}
              value={button.value}
              type={button.type}
              onClick={onClickButton}
            />
          )
        })}
      </form>
    </>
  )
}
