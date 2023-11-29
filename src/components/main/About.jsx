import React from 'react'
import { styled } from 'styled-components'
import { moveToLink } from '../common/linkUrls'
import { about } from '../assets'
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
        <div className="contentP">
          <p>{t('협업과 지식 공유를 중요시하는 프론트엔드 개발자 입니다.')}</p>
          <p>{t('다른 동료들과 함께 지식을 나누고 함께 성장하는 것에 큰 관심을 가지고 있습니다.')}</p>
          <p>{t('시각적 피드백과 즉각적인 결과물에서 성취감을 느껴 프론트엔드 개발을 시작하였습니다.')}</p>
          <p>{t('어떻게든 해내겠다는 의지와 쉽게 포기하지않는 근성이 저의 장점입니다.')}</p>
        </div>
        <MoveToLinkBoxDiv>
          <p>
            <label>GitHub</label> :
            <button onClick={() => moveToLinkBtnHandler('github')}>https://github.com/stella0905</button>
          </p>
          <p>
            <label>Tech Blog</label> :
            <button onClick={() => moveToLinkBtnHandler('blog')}>https://stella0905.tistory.com</button>
          </p>
          <p>
            <label>Mail</label> : <p> &nbsp;&nbsp;o122233@kakao.com</p>
          </p>
          <p>
            <label>Phone</label> : <p> &nbsp;&nbsp;010-6888-9567</p>
          </p>
        </MoveToLinkBoxDiv>
      </ContentDiv>
    </AboutDiv>
  )
}

export default About

const MoveToLinkBoxDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 20px;
    font-weight: 900;
    color: wheat;
  }
  @media screen and (max-width: 580px) {
    margin-top: 20px;
    label {
      font-size: 14px;
    }
  }
  p {
    display: flex;

    p {
      flex-direction: row;
      font-size: 15px;
      font-weight: 800;
    }
  }
  button {
    padding-left: 15px;
    color: #e0d3ba;
    font-size: 18px;
    font-weight: 500;
    &:hover {
      transform: scale(1.03);
      transition: 0.2s;
    }
    @media screen and (max-width: 580px) {
      font-size: 14px;
    }
  }
`
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
  margin-top: 100px;
  color: #f0e1c5;
  h1 {
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    @media screen and (max-width: 580px) {
      font-size: 30px;
    }
  }
  .contentP p {
    width: 900px;
    font-size: 21px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    @media screen and (max-width: 900px) {
      font-size: 18px;
      width: 600px;
    }
    @media screen and (max-width: 580px) {
      font-size: 14px;
      width: 340px;
      margin-left: 20px;
    }
  }
  p {
    font-size: 21px;
    font-weight: 500;
    line-height: 50px;
  }
`
