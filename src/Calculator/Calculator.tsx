import React from 'react'
import Button from './components/Button'
import { CalculatorMain, CalculatorRow, DisplayArea } from './Calculator.style'

type Props = {
  displayValue: string
  onValueClick: (value: string) => void
  onOperatorClick: (operator: string) => void
  onEqualClick: () => void
  onDecimalClick: () => void
  onToggleClick: () => void
  onPercentClick: () => void
  onClear: () => void
  clearValue: string
  operatorClicked: string
}

const Calculator: React.FC<Props> = props => {
  const {
    onDecimalClick,
    displayValue,
    onValueClick,
    onOperatorClick,
    onEqualClick,
    onToggleClick,
    onPercentClick,
    onClear,
    clearValue,
    operatorClicked,
  } = props
  return (
    <CalculatorMain>
      <DisplayArea aria-label="display-area">{displayValue}</DisplayArea>
      <>
        <CalculatorRow>
          <Button
            type="functions"
            value={clearValue}
            onClick={onClear}
            label="clear"
          />
          <Button
            type="functions"
            value="+/-"
            onClick={onToggleClick}
            label="toggle-sign"
          />
          <Button
            type="functions"
            value="%"
            onClick={onPercentClick}
            label="percentage"
          />
          <Button
            showClickState={operatorClicked === '/'}
            type="operator"
            value="/"
            onClick={onOperatorClick}
            label="operator-divide"
          />
        </CalculatorRow>
        <CalculatorRow>
          <Button
            type="num_dec"
            value="7"
            onClick={onValueClick}
            label="value-7"
          />
          <Button
            type="num_dec"
            value="8"
            onClick={onValueClick}
            label="value-8"
          />
          <Button
            type="num_dec"
            value="9"
            onClick={onValueClick}
            label="value-9"
          />
          <Button
            showClickState={operatorClicked === '*'}
            type="operator"
            value="*"
            onClick={onOperatorClick}
            label="operator-multiply"
          />
        </CalculatorRow>
        <CalculatorRow>
          <Button
            type="num_dec"
            value="4"
            onClick={onValueClick}
            label="value-4"
          />
          <Button
            type="num_dec"
            value="5"
            onClick={onValueClick}
            label="value-5"
          />
          <Button
            type="num_dec"
            value="6"
            onClick={onValueClick}
            label="value-6"
          />
          <Button
            showClickState={operatorClicked === '-'}
            type="operator"
            value="-"
            onClick={onOperatorClick}
            label="operator-minus"
          />
        </CalculatorRow>
        <CalculatorRow>
          <Button
            type="num_dec"
            value="1"
            onClick={onValueClick}
            label="value-1"
          />
          <Button
            type="num_dec"
            value="2"
            onClick={onValueClick}
            label="value-2"
          />
          <Button
            type="num_dec"
            value="3"
            onClick={onValueClick}
            label="value-3"
          />
          <Button
            showClickState={operatorClicked === '+'}
            type="operator"
            value="+"
            onClick={onOperatorClick}
            label="operator-plus"
          />
        </CalculatorRow>
        <CalculatorRow>
          <Button
            isBig
            type="num_dec"
            value="0"
            onClick={onValueClick}
            label="value-0"
          />
          <Button
            type="num_dec"
            value="."
            onClick={onDecimalClick}
            label="decimal"
          />
          <Button
            type="operator"
            value="="
            onClick={onEqualClick}
            label="equal"
          />
        </CalculatorRow>
      </>
    </CalculatorMain>
  )
}

export default Calculator
