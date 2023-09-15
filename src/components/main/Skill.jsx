import React from 'react'
import { styled } from 'styled-components'

const Skill = () => {
  return (
    <Background id={'skill'}>
      <h1>SKILL</h1>
    </Background>
  )
}

export default Skill

const Background = styled.div`
  width: 100vw;
  height: 100%;
  padding: 50px;
  background-color: #101820;
  color: #f2aa4c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`
