import React, { useState } from 'react'
import Calculator from './Calculator'

const CalculatorContainer: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [currentOperator, setCurrentOperator] = useState('')
  const [evalArray, setEvalArray] = useState<string[]>([])
  const [clearValue, setClearValue] = useState('AC')
  const [operatorClicked, setOperatorClicked] = useState('')
  const [prevValue, setPrevValue] = useState('')

  const updateDisplayValue = (value: string) => {
    if (displayValue === '0' || prevValue === '%') setDisplayValue(value)
    else if (displayValue === '-0') setDisplayValue(`-${value}`)
    else setDisplayValue(`${displayValue}${value}`)
  }

  const updateEvalArrayAndDisplayValue = (value: string) => {
    setEvalArray([displayValue, currentOperator])
    setDisplayValue(value)
    setCurrentOperator('')
  }

  const onValueClick = React.useCallback(
    (value: string) => {
      setOperatorClicked('')
      setClearValue('C')
      if (currentOperator === '') updateDisplayValue(value)
      else updateEvalArrayAndDisplayValue(value)
      setPrevValue(value)
    },
    [currentOperator, displayValue]
  )

  const onDecimalClick = () => {
    setOperatorClicked('')
    setClearValue('C')
    if (!displayValue.includes('.')) setDisplayValue(`${displayValue}.`)
    setPrevValue('.')
  }

  const onOperatorClick = (operator: string) => {
    if (evalArray.length) onEqualClick()
    setCurrentOperator(operator)
    setPrevValue(operator)
    setOperatorClicked(operator)
  }

  const onToggleClick = () => {
    if (displayValue !== '' && currentOperator !== '') {
      setEvalArray([displayValue, currentOperator])
      setDisplayValue('-0')
      setCurrentOperator('')
    } else if (displayValue.includes('-')) {
      setDisplayValue(displayValue.replace('-', ''))
    } else setDisplayValue(`-${displayValue}`)
    setPrevValue('+/-')
  }

  const onPercentClick = () => {
    if (displayValue !== '' && currentOperator !== '') {
      setEvalArray([displayValue, currentOperator])
      setDisplayValue(`${parseFloat(displayValue) / 100}`)
      setCurrentOperator('')
    } else setDisplayValue(`${parseFloat(displayValue) / 100}`)
    setPrevValue('%')
  }

  const onClear = React.useCallback(() => {
    setDisplayValue('0')
    if (clearValue === 'C') setClearValue('AC')
    else {
      setCurrentOperator('')
      setEvalArray([])
      setOperatorClicked('')
    }
    setPrevValue('C')
  }, [clearValue])

  const calculate = (value1: number, value2: number, operator: string) => {
    switch (operator) {
      case '+':
        setDisplayValue(`${value1 + value2}`)
        break
      case '-':
        setDisplayValue(`${value1 - value2}`)
        break
      case '*':
        setDisplayValue(`${value1 * value2}`)
        break
      case '/':
        setDisplayValue(`${value1 / value2}`)
        break
    }
    setEvalArray([])
  }

  const calculateAsPerNormal = () => {
    const [value1, operator] = evalArray
    calculate(parseFloat(value1), parseFloat(displayValue), operator)
  }

  const calculateWithCurrentDisplay = () => {
    calculate(
      parseFloat(displayValue),
      parseFloat(displayValue),
      currentOperator
    )
  }

  const onEqualClick = () => {
    setOperatorClicked('')
    if (evalArray.length) calculateAsPerNormal()
    else if (currentOperator !== '') calculateWithCurrentDisplay()
  }

  return (
    <Calculator
      displayValue={displayValue}
      onValueClick={onValueClick}
      onOperatorClick={onOperatorClick}
      onEqualClick={onEqualClick}
      onDecimalClick={onDecimalClick}
      onToggleClick={onToggleClick}
      onPercentClick={onPercentClick}
      onClear={onClear}
      clearValue={clearValue}
      operatorClicked={operatorClicked}
    />
  )
}

export default CalculatorContainer
