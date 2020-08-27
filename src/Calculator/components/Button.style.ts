import styled from 'styled-components'

type StyledProps = {
  isBig?: boolean
  type: 'num_dec' | 'operator' | 'functions'
  showClickState?: boolean
}

const StyledButton = styled.div`
  font-size: 2rem;
  color: ${(props: StyledProps) =>
    props.showClickState
      ? '#fe9e07'
      : props.type === 'functions'
      ? '#070707'
      : '#fbfbfb'};
  padding: 15px;
  padding-left: ${(props: StyledProps) => (props.isBig ? '28px' : '15px')};
  width: calc(${(props: StyledProps) => (props.isBig ? 50 : 25)}% - 20px);
  text-align: ${(props: StyledProps) => (props.isBig ? 'left' : 'center')};
  border-radius: ${(props: StyledProps) => (props.isBig ? '40px' : '50%')};
  background-color: ${(props: StyledProps) =>
    props.showClickState
      ? '#fff'
      : props.type === 'num_dec'
      ? '#333'
      : props.type === 'operator'
      ? '#fe9e07'
      : '#a5a5a5'};
  cursor: pointer;
  margin: 10px 0;
  user-select: none;
`

export default StyledButton
