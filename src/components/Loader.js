import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import Text from './Text'

const grow = keyframes`
  20%, 100% {
    width: 255px;
  }

  0%, 10% {
    width: 0px;
  }
`

const Container = styled.div`
  position: relative;
  min-width: 305px;
`

const Lightsaber = styled.div`
  border-radius: 4px;
  border-left: solid 4px gray;
  border-right: solid 4px gray;
  width: 50px;
  height: 15px;
  background: #DDD;
`

const Plasma = styled.div`
  border-radius: 0 12px 12px 0;
  animation-name: ${grow};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  position: absolute;
  top: 3px;
  left: 55px;
  width: 0px;
  height: 10px;
  filter: blur(1px);
  background: rgb(229, 17, 21);
  background: linear-gradient(
    to top,
    rgba(229, 17, 21, 1) 0%,
    rgba(254, 254, 254, 1) 47%, 
    rgba(254, 254, 254, 1) 71%, 
    rgba(229, 17, 21, 1) 100%
  );
`

const Loader = () => {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Container>
        <Lightsaber />
        <Plasma />
      </Container>

      <Box mt='20px'>
        <Text
          white
        >
          Loading
        </Text>
      </Box>
    </Flex>
  )
}

export default Loader
