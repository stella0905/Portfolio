import React, { useState } from 'react'
import { styled } from 'styled-components'
import { scrollToSectionHandler } from '../scrollEvent'
import { useTranslation } from 'react-i18next'
import { langEn, langKo, uri, menubar } from '../assets'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isKorean, setIsKorean] = useState(true)
  const [isMenuBar, setIsMenuBar] = useState(false)
  const scrollToSectionBtnHandler = (id) => {
    scrollToSectionHandler(id)
  }
  const translateBtnHandler = (lang) => {
    setIsKorean((prevState) => !prevState)
    i18n.changeLanguage(lang)
  }
  const openMenuBarBtnHandler = () => {
    setIsMenuBar(!isMenuBar)
    console.log(isMenuBar)
  }
  return (
    <BackgroundHeader>
      <Logo>
        <img src={uri} alt="logoImg" />
        {t('최유리')}
      </Logo>
      <MenuBoxDiv isMenuBar={isMenuBar}>
        <div>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('intro')}>{t('Intro')}</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('about')}>About</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('skill')}>Skill</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('project')}>Projects</MoveToBtn>
          <MoveToBtn onClick={() => scrollToSectionBtnHandler('experience')}>experience</MoveToBtn>
        </div>
      </MenuBoxDiv>
      <TransBtn onClick={() => translateBtnHandler(isKorean ? 'en' : 'ko')} isKorean={isKorean} />
      <MenuBarImg src={menubar} alt="MenuBar" onClick={openMenuBarBtnHandler} isMenuBar={isMenuBar} />
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
const Logo = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-weight: 900;
  letter-spacing: 3px;
  color: wheat;
  gap: 10px;
  img {
    /* background-color: red; */
    width: 40px;
    height: 35px;
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
    @media screen and (max-width: 900px) {
      /* border: 2px solid red; */
      flex-direction: column;
      align-items: end;
      position: absolute;
      right: 10px;
      top: 80px;
      gap: 0;
      background-color: #00000073;
      display: ${({ isMenuBar }) => (isMenuBar ? 'flex' : 'none')};
    }
  }
`
const MoveToBtn = styled.button`
  font-size: 23px;
  font-weight: 400;
  color: #f5deb3;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
  @media screen and (max-width: 900px) {
    width: 180px;
    padding: 10px;
    text-align: end;
    &:hover {
      border: 1px solid gray;
    }
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
  @media screen and (max-width: 900px) {
    right: 70px;
  }
`

const MenuBarImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    display: none;
  }
`
