import React from 'react'
import { styled } from 'styled-components'
import { moveToLink } from '../common/linkUrls'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Study = () => {
  const { t } = useTranslation()

  const moveToLinkBtnHandler = (linkName) => {
    moveToLink(linkName)
  }
  return (
    <StudyDiv>
      <h2>{t('프론트 언어기술 스터디')} </h2>
      <ContentDiv>
        Study Wiki :
        <button onClick={() => moveToLinkBtnHandler('frontStudyNotion')}>
          {t('구경가기')}
          <Arrow width="30" height="30" fill="#363636" />
        </button>
        GitHub :
        <button onClick={() => moveToLinkBtnHandler('frontStudyNotion')}>
          {t('구경가기')}
          <Arrow width="30" height="30" fill="#363636" />
        </button>
      </ContentDiv>
      <ContentDiv>
        {t('진행동기')} :
        <p>
          {t(
            '혼자서 공부하는 것보단 같이 공부하는게 지속 가능하고 부족한 의지를 같이 동기부여해서 나아갈 수 있다고 생각해서 스터디를 개설',
          )}
        </p>
      </ContentDiv>
      <ContentDiv>
        {t('진행방향')} :
        <p>
          *2023.04.14 ~ 2023.05.05 주 1회 진행*
          <br /> {t('프론트 언어기술에 대해 공부 후 발표')} <br />
          *2023.06.04 ~ 2023.07.02 주 1회 진행*
          <br />{' '}
          {t(
            '공통적인 질문에 대한 답변 준비 후 베스트 답변 선정하는 방식으로 스터디 진행 - 프로젝트 주차에는 스터디의 부담을 줄이고자 조금 더 간단한 방법으로 스터디를 진행',
          )}{' '}
          <br />
          *2023.07.02 ~ 주 1회 진행*
          <br /> {t('모던 자바스크립트 딥다이브 스터디 진행 및 언어기술 질문 공부 및 발표')}
        </p>
      </ContentDiv>
    </StudyDiv>
  )
}

export default Study

const StudyDiv = styled.div`
  z-index: 2;
  /* border: 1px solid red; */
  border-radius: 20px;
  margin-top: 50px;
  width: 650px;
  height: 550px;
  padding: 20px;
  line-height: 40px;
  background-color: rgba(226, 226, 220, 0.647);
  h2 {
    color: black;
    font-size: 27px;
    font-weight: 800;
  }
  h3 {
    color: black;
    font-size: 20px;
    font-weight: 800;
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
  p {
    margin-left: 10px;
    width: 470px;
    color: #222120;
    font-size: 15px;
    font-weight: 600;
  }
`
