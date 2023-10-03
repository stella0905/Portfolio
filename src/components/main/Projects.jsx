import React from 'react'
import { styled } from 'styled-components'
import DieDie from './projects/DieDie'
import Odimedi from './projects/Odimedi'
import HanghaeCapsule from './projects/HanghaeCapsule'
import { moveToLink } from '../common/linkUrls'

const Projects = () => {
  const moveToLinkBtnHandler = (linkName) => {
    moveToLink(linkName)
  }
  return (
    <Background id={'project'}>
      <h1>PROJECTS</h1>
      <DieDie moveToLink={moveToLinkBtnHandler} />
      <Odimedi moveToLink={moveToLinkBtnHandler} />
      <HanghaeCapsule moveToLink={moveToLinkBtnHandler} />
    </Background>
  )
}

export default Projects

const Background = styled.div`
  width: 100vw;
  height: 100%;
  padding: 50px;
  padding-bottom: 100px;
  background-color: #101820;
  color: #f2aa4c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  h1 {
    margin-top: 30px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`
