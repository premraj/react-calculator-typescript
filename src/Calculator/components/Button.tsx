import React from 'react'
import StyledButton from './Button.style'

type Props = {
  value: string
  onClick: Function
  label: string
  isBig?: boolean
  type: 'num_dec' | 'operator' | 'functions'
  showClickState?: boolean
}

const Button: React.FC<Props> = props => {
  const { value, onClick, label, isBig, type, showClickState } = props
  return (
    <StyledButton
      showClickState={showClickState}
      type={type}
      isBig={isBig}
      aria-label={label}
      onClick={() => onClick(value)}
    >
      {value}
    </StyledButton>
  )
}

export default React.memo(Button)
