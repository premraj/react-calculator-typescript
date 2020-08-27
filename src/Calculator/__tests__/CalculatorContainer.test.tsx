import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CalculatorContainer from '../CalculatorContainer'

describe('CalculatorContainer test suite', () => {
  afterEach(cleanup)

  it('renders the components', () => {
    render(<CalculatorContainer />)
  })

  it('shows the correct value in the display div', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    expect(getByLabelText('display-area').textContent).toBe('0')
  })

  it('fires click event on value button and updates display', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-7'))
    expect(getByLabelText('display-area').textContent).toBe('7')
    fireEvent.click(getByLabelText('value-0'))
    expect(getByLabelText('display-area').textContent).toBe('70')
  })

  it('updates display area to show new number if operator is clicked', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    expect(getByLabelText('display-area').textContent).toBe('0')
    fireEvent.click(getByLabelText('value-1'))
    expect(getByLabelText('display-area').textContent).toBe('1')
    fireEvent.click(getByLabelText('operator-plus'))
    expect(getByLabelText('display-area').textContent).toBe('1')
    fireEvent.click(getByLabelText('value-7'))
    expect(getByLabelText('display-area').textContent).toBe('7')
  })

  it('displays the correct addition result in the display area', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-7'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('8')
  })

  it('displays the correct substraction result in the display area', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-7'))
    fireEvent.click(getByLabelText('operator-minus'))
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('6')
  })

  it('displays the correct multiplication result in the display area', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-7'))
    fireEvent.click(getByLabelText('operator-multiply'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('14')
  })

  it('displays the correct division result in the display area', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-8'))
    fireEvent.click(getByLabelText('operator-divide'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('4')
  })

  it('calculates correct value for multiple operators', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-8'))
    fireEvent.click(getByLabelText('value-0'))
    fireEvent.click(getByLabelText('operator-divide'))
    fireEvent.click(getByLabelText('value-2'))
    expect(getByLabelText('display-area').textContent).toBe('2')
    fireEvent.click(getByLabelText('operator-multiply'))
    expect(getByLabelText('display-area').textContent).toBe('40')
    fireEvent.click(getByLabelText('value-5'))
    expect(getByLabelText('display-area').textContent).toBe('5')
    fireEvent.click(getByLabelText('operator-plus'))
    expect(getByLabelText('display-area').textContent).toBe('200')
    fireEvent.click(getByLabelText('value-7'))
    fireEvent.click(getByLabelText('value-0'))
    expect(getByLabelText('display-area').textContent).toBe('70')
    fireEvent.click(getByLabelText('operator-minus'))
    expect(getByLabelText('display-area').textContent).toBe('270')
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('value-0'))
    expect(getByLabelText('display-area').textContent).toBe('20')
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('250')
  })

  it('adds only one decimal point at the end of display area value', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('decimal'))
    expect(getByLabelText('display-area').textContent).toBe('0.')
    fireEvent.click(getByLabelText('decimal'))
    expect(getByLabelText('display-area').textContent).toBe('0.')
    fireEvent.click(getByLabelText('value-5'))
    expect(getByLabelText('display-area').textContent).toBe('0.5')
    fireEvent.click(getByLabelText('decimal'))
    expect(getByLabelText('display-area').textContent).toBe('0.5')
  })

  it('calculates decimal values correctly', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('decimal'))
    fireEvent.click(getByLabelText('value-5'))
    expect(getByLabelText('display-area').textContent).toBe('0.5')
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-1'))
    expect(getByLabelText('display-area').textContent).toBe('1')
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('1.5')
  })

  it('toggles +/- correctly', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    expect(getByLabelText('display-area').textContent).toBe('5')
    fireEvent.click(getByLabelText('toggle-sign'))
    expect(getByLabelText('display-area').textContent).toBe('-5')
    fireEvent.click(getByLabelText('toggle-sign'))
    expect(getByLabelText('display-area').textContent).toBe('5')
  })

  it('calculates correctly after toggle', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('toggle-sign'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('0')
  })

  it('calculates percentage correctly', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('value-0'))
    fireEvent.click(getByLabelText('value-0'))
    expect(getByLabelText('display-area').textContent).toBe('100')
    fireEvent.click(getByLabelText('percentage'))
    expect(getByLabelText('display-area').textContent).toBe('1')
    fireEvent.click(getByLabelText('percentage'))
    expect(getByLabelText('display-area').textContent).toBe('0.01')
  })

  it('clears the current display value when clear button is click', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    expect(getByLabelText('clear').textContent).toBe('AC')
    fireEvent.click(getByLabelText('value-5'))
    expect(getByLabelText('display-area').textContent).toBe('5')
    expect(getByLabelText('clear').textContent).toBe('C')
    fireEvent.click(getByLabelText('clear'))
    expect(getByLabelText('clear').textContent).toBe('AC')
    expect(getByLabelText('display-area').textContent).toBe('0')
  })

  it('calculates correctly when clear is clicked ones', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('7')
  })

  it('resets everything if clear is clicked twice', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-2'))
    expect(getByLabelText('clear').textContent).toBe('C')
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('0')
  })

  it('resets everything if clear is clicked more than twice', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('clear').textContent).toBe('AC')
    expect(getByLabelText('display-area').textContent).toBe('0')
  })

  it('calculates correctly if equals is pressed with no operator', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('5')
  })

  it('calculates correctly if equals is pressed with operator', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('10')
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-0'))
    fireEvent.click(getByLabelText('decimal'))
    fireEvent.click(getByLabelText('value-6'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('1.2')
  })

  it('calculates correctly with all numbers used', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-3'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-4'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-6'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-7'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-8'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-9'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('value-0'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('55')
  })

  it('calculates correct value when toggle is clicked after operator', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('toggle-sign'))
    expect(getByLabelText('display-area').textContent).toBe('-0')
    fireEvent.click(getByLabelText('value-2'))
    expect(getByLabelText('display-area').textContent).toBe('-2')
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('-1')
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('toggle-sign'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('value-5'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('-20')
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('toggle-sign'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('3')
  })

  it('calculates correct value when percent is clicked after operator', () => {
    const { getByLabelText } = render(<CalculatorContainer />)
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('percentage'))
    expect(getByLabelText('display-area').textContent).toBe('0.01')
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('1.01')
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('clear'))
    fireEvent.click(getByLabelText('value-1'))
    fireEvent.click(getByLabelText('operator-plus'))
    fireEvent.click(getByLabelText('percentage'))
    fireEvent.click(getByLabelText('value-2'))
    fireEvent.click(getByLabelText('equal'))
    expect(getByLabelText('display-area').textContent).toBe('3')
  })
})