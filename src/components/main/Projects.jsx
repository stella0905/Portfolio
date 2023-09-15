import React from 'react'
import { styled } from 'styled-components'
import DieDie from './projects/DieDie'
import Odimedi from './projects/Odimedi'
import HanghaeCapsule from './projects/HanghaeCapsule'

const Projects = () => {
  const linkUrls = {
    diedieGithub: 'https://github.com/diedielolorg/diediefrontend',
    diedieSite: 'https://diediefrontend.vercel.app/',
    odimediGithub: 'https://github.com/orgs/diedielolorg/repositories',
    hanghaeCapsuleGithub: 'https://github.com/H14-Capsule/newClientCapsule',
  }
  const moveToLinkBtnHandler = (linkName) => {
    const url = linkUrls[linkName]
    if (url) {
      window.open(url, '_blank')
    }
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
  background-color: #101820;
  color: #f2aa4c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  h1 {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 70px;
  }
`
