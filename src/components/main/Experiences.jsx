import React from 'react'
import { styled } from 'styled-components'
import { moveToLink } from '../common/linkUrls'
import { ReactComponent as Arrow } from '../assets/arrow.svg'

const Experiences = () => {
  const moveToLinkBtnHandler = (linkName) => {
    moveToLink(linkName)
  }
  return (
    <Background id={'experiences'}>
      <h1>Experiences</h1>
      <StudyDiv>
        <h2>Study</h2>
        <h3>프론트 언어기술 스터디 </h3>
        <button onClick={() => moveToLinkBtnHandler('frontStudyNotion')}>
          Study Wiki
          <Arrow width="50" height="50" fill="#f2aa4c" />
        </button>
        <ContentDiv>
          d?D?D?D?<p>?D?D?D</p>
        </ContentDiv>
      </StudyDiv>
    </Background>
  )
}

export default Experiences

const Background = styled.div`
  width: 100vw;
  height: 100%;
  padding: 50px;
  background-color: #364b44;
  color: #f2aa4c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`
const StudyDiv = styled.div`
  border: 1px solid red;
  margin-top: 50px;
  width: 500px;
  line-height: 40px;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
  h3 {
    color: white;
    font-size: 20px;
    font-weight: 800;
  }
  button {
    display: flex;
    align-items: center;
    color: #f2aa4c;
    font-size: 19px;
    font-weight: 500;
    border: none;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
`
const ContentDiv = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  p {
    color: #63605f;
    font-size: 18px;
    font-weight: 600;
  }
`
