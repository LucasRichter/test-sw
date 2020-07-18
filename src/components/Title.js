import styled, { css } from 'styled-components'
import colors from '../utils/colors'

const Title = styled.h1`
  color: ${p => p.color || colors.black};
  font-size: ${p => p.size || '24px'};
  font-family: 'STARWARS', sans-serif;

  ${p => p.outline && css`
    text-decoration: underline;
  `}

  ${p => p.white && css`
    color: white;
  `}

  ${p => p.center && css`
    text-align: center;
  `}

  ${p => p.small && css`
    font-size: 12px;
  `}

  ${p => p.big && css`
    font-size: 18px;
  `}

  ${p => p.bold && css`
    font-weight: bold;
  `}
`

export default Title
