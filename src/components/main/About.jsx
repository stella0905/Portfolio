import React from 'react'
import { styled } from 'styled-components'
import { moveToLink } from '../common/linkUrls'
import { about } from '../assets'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()  

  const moveToLinkBtnHandler = (linkName) => {
    moveToLink(linkName)
  }
  return (
    <AboutDiv id={'about'}>
      <ContentDiv>
        <h1>- {t('Choi Uri')} -</h1>
        <p>{t('협업과 지식 공유를 중요시하는 프론트엔드 개발자 입니다.')}</p>
        <p>{t('다른 동료들과 함께 지식을 나누고 함께 성장하는 것에 큰 관심을 가지고 있습니다.')}</p>
        <p>{t('시각적 피드백과 즉각적인 결과물에서 성취감을 느껴 프론트엔드 개발을 시작하였습니다.')}</p>
        <p>{t('어떻게든 해내겠다는 의지와 쉽게 포기하지않는 근성이 저의 장점입니다.')}</p>
        <div>
          <MoveToLinkBtn onClick={() => moveToLinkBtnHandler('github')}>
            <p>GitHub </p>
            <Arrow width="50" fill="#f0e1c5" />
          </MoveToLinkBtn>
          <MoveToLinkBtn onClick={() => moveToLinkBtnHandler('blog')}>
            <p>Blog </p>
            <Arrow width="50" fill="#f0e1c5" />
          </MoveToLinkBtn>
        </div>
      </ContentDiv>
    </AboutDiv>
  )
}

export default About

const AboutDiv = styled.div`
  height: 830px;
  background-image: url(${about});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
`

const ContentDiv = styled.div`
  /* border: 1px solid red; */
  margin-top: 170px;
  color: #f0e1c5;
  h1 {
    margin-bottom: 70px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
  p {
    font-size: 21px;
    font-weight: 500;
    line-height: 60px;
  }
  div {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    gap: 180px;
  }
`
const MoveToLinkBtn = styled.button`
  width: 200px;
  color: wheat;
  border-radius: 30px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  &:hover {
    border-bottom: 1px solid wheat;
    transition: 0.2s;
  }
  p {
    font-size: 25px;
    font-weight: 800;
    &:hover {
      transition: 0.2s;
    }
  }
`
