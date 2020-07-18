import React, { useState } from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import StarshipList from './components/StarshipList'
import Input from './components/Input'
import Title from './components/Title'
import Text from './components/Text'

const STEPS = {
  distance: 'distance',
  results: 'results'
}

const Content = styled(Flex)`
  max-width: 1500px;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

function App () {
  const [distance, setDistance] = useState('')
  const [step, setStep] = useState(STEPS.distance)
  const resetDistance = () => {
    setStep(STEPS.distance)
    setDistance('')
  }
  const handleSubmit = () => {
    if (!distance) return
    setStep(STEPS.results)
  }
  const getContent = () => {
    if (step === STEPS.distance) {
      return (
        <Box
          as='form'
          style={{ maxWidth: '550px' }}
          width='100%'
          onSubmit={() => handleSubmit()}
        >
          <Input
            placeholder='Distance in MGLT'
            onChange={e => setDistance(e.target.value)}
          />
        </Box>
      )
    }

    if (step === STEPS.results) {
      return (
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Title
            outline
            white
            center
          >
            Results for distance: {distance} MGLT
          </Title>

          <Box
            my='20px'
          >
            <Text
              white
              center
            >
              Stops by starships. Click <Text as='span' white cursor onClick={() => resetDistance()} outline>here</Text> to change distance.
            </Text>
          </Box>

          <StarshipList
            distance={distance}
          />
        </Flex>
      )
    }
  }

  return (
    <Content>
      <Box
        my='40px'
        mx='auto'
      >
        <Title
          as='h1'
          size='55px'
          center
          white
        >
          STAR WARS
        </Title>
        <Title
          as='h2'
          size='30px'
          center
          white
        >
          MGLT Distance Calculator
        </Title>
      </Box>
      {getContent()}
      <Box
        my='40px'
      >
        <Text
          white
          big
        >
          @2020 - Lucas Richter
        </Text>
      </Box>
    </Content>
  )
}

export default App
