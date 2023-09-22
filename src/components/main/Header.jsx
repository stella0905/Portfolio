import React, { useState } from 'react'
import { styled } from 'styled-components'
import { scrollToSectionHandler } from '../scrollEvent'
import { useTranslation } from 'react-i18next'
import { langEn, langKo } from '../assets'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isKorean, setIsKorean] = useState(true)
  const scrollToSectionBtnHandler = (id) => {
    scrollToSectionHandler(id)
  }
  const translateBtnHandler = (lang) => {
    setIsKorean((prevState) => !prevState)
    i18n.changeLanguage(lang)
  }
  return (
    <BackgroundHeader>
      <p>로고 들어올 예정</p>
      <MenuBoxDiv>
        <div>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('intro')}>{t('Intro')}</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('about')}>About</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('skill')}>Skill</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('project')}>Projects</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('experiences')}>Experiences</MoveToBtn>
        </div>
      </MenuBoxDiv>
      <TransBtn onClick={() => translateBtnHandler(isKorean ? 'en' : 'ko')} isKorean={isKorean} />
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
  color: wheat;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
`
const TransBtn = styled.button`
  cursor: pointer;
  background-image: url(${(props) => (props.isKorean ? langKo : langEn)});
  width: 55px;
  height: 32px;
  background-color: transparent;
  position: absolute;
  right: 20px;
`
