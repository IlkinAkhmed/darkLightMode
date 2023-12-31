import React from 'react'
import styled, {css} from 'styled-components'

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${props =>
    props.$primary &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`
render(
    <Container>
      <Button>Normal Button</Button>
      <Button $primary>Primary Button</Button>
    </Container>
  );
const StyledComponents = () => {
  return (
    <>
    </>
  )
}

export default StyledComponents