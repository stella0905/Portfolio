import React, { useEffect, useState } from 'react'
import { keyframes, styled } from 'styled-components'
import { scrollToSectionHandler } from '../scrollEvent'
import { bottomArrow, intro } from '../assets'
import { useTranslation } from 'react-i18next'

const Intro = () => {
  const { t } = useTranslation()
  const scrollToSectionBtnHandler = (id) => {
    scrollToSectionHandler(id)
  }
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1)
  }, [t])
  return (
    <Main id={'intro'}>
      <Title>
        <AnimatedHeading key={animationKey}>
          <h1>
            {t('Choi Uri')}&nbsp; {t('Portfolio')}
          </h1>
          <h2>{t('Front-End Developer')}</h2>
        </AnimatedHeading>

        <MoveBtn onClick={() => scrollToSectionBtnHandler('about')}>
          <p>{t('About Yuri')}</p>
          <img src={bottomArrow} alt="bottomArrowBtnIcon" />
        </MoveBtn>
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
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Main = styled.div`
  height: 100vh;
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
  p {
    margin-top: 120px;
    font-size: 30px;
  }
`
const AnimatedHeading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    color: wheat;
    font-size: 90px;
    line-height: 120px;
    animation: ${fadeIn} 1s ease-in-out forwards;
  }
  h2 {
    color: wheat;
    font-size: 50px;
    animation: ${fadeIn} 1s ease-in-out forwards;
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
  animation: ${bounce} 1s ease infinite;

  img {
    width: 100px;
  }

  &:hover {
    animation-name: ${fadeInOut}, ${bounce};
    animation-duration: 2s, 1s;
    animation-timing-function: ease-in-out, ease;
    animation-iteration-count: infinite;

    transform: scale(1.05);
    transition: 0.2s;
  }
  @media (max-height: 600px) {
    display: none;
  }
`
