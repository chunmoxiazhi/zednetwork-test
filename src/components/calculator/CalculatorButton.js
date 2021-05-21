import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CALCULATOR_BUTTON_TYPE } from '../../config/constants'

export default function CalculatorButton ({
  value,
  type,
  onClick
}) {
  CalculatorButton.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  }

  return (
    <div
      className={classNames('calculator-button', {
        'calculator-button-number': type === CALCULATOR_BUTTON_TYPE.NUMBER,
        'calculator-button-action': type === CALCULATOR_BUTTON_TYPE.ACTION,
        'calculator-button-clear': type === CALCULATOR_BUTTON_TYPE.CLEAR,
        'calculator-button-equal': type === CALCULATOR_BUTTON_TYPE.EQUAL
      })}
      onClick={() => onClick(value, type)}
    >
      {value}
    </div>
  )
}
