import React from 'react'
import { Flex } from '@rebass/grid'
import colors from '../utils/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Container = styled(Flex)`
  border-radius: 10px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
  align-items: center;
  width: 100%;
  transition: all .325s ease-in-out;
  height: 50px;
`

export const StyledInput = styled.input`
  appearance: none;
  background: transparent;
  font-size: 24px;
  outline: none;
  width: 100%;
  color: white;
  font-family: 'Roboto';
  border: none;
`

const Input = ({
  id,
  ...props
}) => {
  return (
    <Container
      p='10px'
      width='100%'
      as='label'
      htmlFor={id}
    >
      <StyledInput
        id={id}
        {...props}
      />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string
}

export default Input
