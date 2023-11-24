import React from 'react'
import { styled } from 'styled-components'
import { moveToLink } from '../common/linkUrls'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  const moveToLinkBtnHandler = (linkName) => {
    moveToLink(linkName)
  }
  return (
    <StudyDiv>
      <h2>{t('부트캠프 항해99 14기')} </h2>
      <ContentDiv>
        {t('부트캠프 참여 동기')}
        <div>
          {t('여러 프로젝트를 경험해보고 같은 꿈을 목표로 하는 사람들과 함께 공부하면서 동기부여되기 위해 참여함.')}
        </div>
      </ContentDiv>
      <Content>
        <p>
          *2023.03.02 ~ 2023.07.07*
          <br /> {t('스파르타 코딩클럽 온라인 부트캠프 항해99 14기 리액트 교육과정')}
          <br />
          {t('약 100명의 교육생 중 6명에게만 부여되는 장학생으로 선정')}
          <button onClick={() => moveToLinkBtnHandler('hanghaeCertificate')}>
            {t('장학생 수료증 확인')}
            <Arrow width="30" height="30" fill="#363636" />
          </button>
          - {t('미니프로젝트, 클론프로젝트, 최종 팀 프로젝트 진행')}
          <br />- {t('3개월동안 여러번의 팀 프로젝트 과정을 통해 다른 직군과의 협업과정 경험.')}
          <br />
        </p>
      </Content>
    </StudyDiv>
  )
}

export default Education

const StudyDiv = styled.div`
  z-index: 2;
  border-radius: 20px;
  margin-top: 50px;
  width: 650px;
  height: 700px;
  padding: 20px;
  line-height: 40px;
  background-color: rgba(226, 226, 220, 0.647);
  h2 {
    color: black;
    font-size: 30px;
    font-weight: 800;
  }
  h3 {
    color: black;
    font-size: 20px;
    font-weight: 800;
  }
  @media screen and (max-width: 720px) {
    width: 360px;
  }
`
const ContentDiv = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  display: flex;

  button {
    margin-right: 50px;
    display: flex;
    align-items: center;
    color: #222120;
    font-size: 17px;
    font-weight: 500;
    border: none;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
  div {
    margin-left: 10px;
    width: 420px;
    color: #222120;
    font-size: 15px;
    font-weight: 600;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    div {
      width: 320px;
      margin-left: 0px;
    }
  }
`
const Content = styled.div`
  p {
    color: #222120;
    font-size: 15px;
    font-weight: 600;
  }
  button {
    display: flex;
    align-items: center;
    color: #354a43;
    background-color: #f2aa4c36;
    font-size: 17px;
    font-weight: 500;
    border: none;
    &:hover {
      background-color: #f2aa4c8d;
      transform: scale(1.01);
      transition: 0.2s;
    }
  }
`
