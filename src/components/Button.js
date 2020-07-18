import styled from 'styled-components'
import colors from '../utils/colors'

export default styled.button`
  appearance: none;
  transition: all .325s ease-in-out;
  width: 100%;
  cursor: pointer;
  text-align: center;
  background-color: ${colors.blue};
  border: none;
  border-radius: 4px;
  padding: 20px 12px;
  color: white;
  font-size: 28px;

  &:hover {
    filter: brightness(1.75);
  }
`
