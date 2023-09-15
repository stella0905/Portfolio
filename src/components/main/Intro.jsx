import React from 'react'
import { keyframes, styled } from 'styled-components'
import intro from '../assets/intro.png'
import { scrollToSectionHandler } from '../scrollEvent'

const Intro = () => {
  const scrollToSectionBtnHandler = (id) => {
    scrollToSectionHandler(id)
  }

  return (
    <Main id={'intro'}>
      <Title>
        <h1>Choi Uri &nbsp; Portfolio</h1>
        <h2>Front-End Developer</h2>
        <p>about Yuri</p>
        <MoveBtn onClick={() => scrollToSectionBtnHandler('about')}>⬇️</MoveBtn>
      </Title>
    </Main>
  )
}

export default Intro

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(-5px);
  }
`

const Main = styled.div`
  height: 100%;
  background-image: url(${intro});
  background-size: cover;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`
const Title = styled.div`
  margin-top: 190px;
  line-height: 70px;

  display: flex;

  flex-direction: column;
  align-items: center;
  font-weight: 900;
  h1 {
    color: wheat;
    font-size: 90px;
  }
  h2 {
    color: wheat;
    font-size: 50px;
  }
  p {
    margin-top: 100px;
    font-size: 30px;
  }
`
const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  1%{
    opacity: 0.2;

  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const MoveBtn = styled.button`
  color: #060606cb;
  border: none;
  cursor: pointer;
  font-size: 100px;
  animation: ${bounce} 1s ease infinite;

  &:hover {
    animation-name: ${fadeInOut}, ${bounce};
    animation-duration: 2s, 1s;
    animation-timing-function: ease-in-out, ease;
    animation-iteration-count: infinite;

    transform: scale(1.05);
    transition: 0.2s;
  }
`
