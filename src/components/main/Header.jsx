import React from 'react'
import { styled } from 'styled-components'
import { scrollToSectionHandler } from '../scrollEvent'

const Header = () => {
  const scrollToSectionBtnHandler = (id) => {
    scrollToSectionHandler(id)
  }
  return (
    <BackgroundHeader>
      <p>로고 들어올 예정</p>
      <MenuBoxDiv>
        <div>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('intro')}>Intro</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('about')}>About</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('skill')}>Skill</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('project')}>Projects</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('experiences')}>Experiences</MoveToBtn>
        </div>
      </MenuBoxDiv>
    </BackgroundHeader>
  )
}

export default Header

const BackgroundHeader = styled.header`
  z-index: 99;
  background-color: rgba(44, 43, 43, 0.519);
  width: 100vw;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    position: fixed;
    left: 20px;
    border: 1px solid white;
  }
`
const MenuBoxDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 30px;
  }
`
const MoveToBtn = styled.button`
  font-size: 23px;
  font-weight: 400;
  color: #ffffff;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
`
