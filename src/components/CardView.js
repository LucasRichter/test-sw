import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@rebass/grid'
import Text from './Text'
import styled, { css } from 'styled-components'
import TrackVisibility from 'react-on-screen'
import Title from './Title'

export const Content = styled(Box)`
  border-radius: 40px;
  overflow: hidden;
  width: 400px;
  background-color: white;
  opacity: 0;
  transform: translate(50px, 5px);
  transition: all .125s ease-in-out;
  transition-delay: .125s;

  ${p => p.isVisible && css`
    opacity: 1;
    transform: translate(0px, 0px);
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.05) translate(-10px, -10px);
  }
`

const CardView = ({
  name,
  model,
  stops,
  consumables,
  passengers,
  manufacturer,
  MGLT
}) => {
  return (
    <TrackVisibility
      once
      partialVisibility
    >
      <Content>
        <Flex
          alignItems='center'
          justifyContent='center'
          style={{ border: '1px solid gray' }}
          p='20px'
        >
          <Box
            as='img'
            width='150px'
            src='/assets/starship.png'
          />
        </Flex>

        <Box
          p='20px'
        >
          <Title
            as='h2'
            center
            size='18px'
          >
            {name}
          </Title>

          <Flex
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Box
              flexGrow='1'
              flexBasis='0'
            >
              <Box mt='10px'>
                <Text small>
                  Manufacturer <strong>{manufacturer}</strong>
                </Text>
              </Box>

              <Box mt='10px'>
                <Text small>
                  Model <strong>{model}</strong>
                </Text>
              </Box>

              <Box mt='10px'>
                <Text small>
                  Stop <strong>{isNaN(stops) ? 'unknown' : stops}</strong>
                </Text>
              </Box>
            </Box>

            <Box
              flexGrow='1'
              flexBasis='0'
            >
              <Box mt='10px'>
                <Text small>
                  Passengers <strong>{passengers}</strong>
                </Text>
              </Box>

              <Box mt='10px'>
                <Text small>
                  MGLT <strong>{MGLT}</strong>
                </Text>
              </Box>

              <Box mt='10px'>
                <Text small>
                  Consumables <strong>{consumables}</strong>
                </Text>
              </Box>
            </Box>
          </Flex>

        </Box>
      </Content>
    </TrackVisibility>

  )
}

CardView.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  consumables: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  passengers: PropTypes.string.isRequired,
  MGLT: PropTypes.string.isRequired,
  stops: PropTypes.string.isRequired
}

export default CardView
