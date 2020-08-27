import styled from 'styled-components'

const CalculatorMain = styled.div`
  width: 410px;
  padding: 20px;
  margin: 0 auto;
`

const CalculatorRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const DisplayArea = styled.div`
  color: #fff;
  font-size: 4em;
  text-align: right;
  padding: 10px 0;
`

export { CalculatorMain, CalculatorRow, DisplayArea }
