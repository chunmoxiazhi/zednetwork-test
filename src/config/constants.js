export const CALCULATOR_BUTTON_TYPE = {
  NUMBER: 'number',
  ACTION: 'action',
  EQUAL: 'equal',
  CLEAR: 'clear'
}

export const CALCULATOR_BUTTONS = [
  {
    value: '1',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '2',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '3',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '+',
    type: CALCULATOR_BUTTON_TYPE.ACTION
  },
  {
    value: '4',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '5',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '6',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '-',
    type: CALCULATOR_BUTTON_TYPE.ACTION
  },
  {
    value: '7',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '8',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '9',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '*',
    type: CALCULATOR_BUTTON_TYPE.ACTION
  },
  {
    value: 'C',
    type: CALCULATOR_BUTTON_TYPE.CLEAR
  },
  {
    value: '0',
    type: CALCULATOR_BUTTON_TYPE.NUMBER
  },
  {
    value: '=',
    type: CALCULATOR_BUTTON_TYPE.EQUAL
  },
  {
    value: '/',
    type: CALCULATOR_BUTTON_TYPE.ACTION
  }
]

export const SUBMIT_STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed'
}
