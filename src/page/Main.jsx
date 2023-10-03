import React from 'react'
import Intro from '../components/main/Intro'
import About from '../components/main/About'
import Projects from '../components/main/Projects'
import Skill from '../components/main/Skill'
import Experiences from '../components/main/Experiences'
import { styled } from 'styled-components'

const Main = () => {
  return (
    <WrapDiv>
      <Intro />
      <About />
      <Skill />
      <Projects />
      <Experiences />
    </WrapDiv>
  )
}

export default Main

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
`
