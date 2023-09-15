import React from 'react'
import about from '../assets/about.png'
import { styled } from 'styled-components'

const About = () => {
  const linkUrls = {
    github: 'https://github.com/stella0905',
    blog: 'https://stella0905.tistory.com/',
  }

  const moveToLinkBtnHandler = (linkName) => {
    const url = linkUrls[linkName]
    if (url) {
      window.open(url, '_blank')
    }
  }
  return (
    <AboutDiv id={'about'}>
      <ContentDiv>
        <h1>- 최유리 -</h1>
        <p>협업과 지식 공유를 중요시하는 프론트엔드 개발자 입니다.</p>
        <p>다른 동료들과 함께 지식을 나누고 함께 성장하는 것에 큰 관심을 가지고 있습니다.</p>
        <p>시각적 피드백과 즉각적인 결과물에서 성취감을 느껴 프론트엔드 개발을 시작하였습니다.</p>
        <p>어떻게든 해내겠다는 의지와 쉽게 포기하지않는 근성이 저의 장점입니다.</p>
        <div>
          <MoveToLinkBtn onClick={() => moveToLinkBtnHandler('github')}>
            <p>GitHub &nbsp; ➡️ </p>
          </MoveToLinkBtn>
          <MoveToLinkBtn onClick={() => moveToLinkBtnHandler('blog')}>
            <p>Blog &nbsp; ➡️ </p>
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
  color: white;
  h1 {
    margin-bottom: 70px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
  p {
    font-size: 25px;
    font-weight: 500;
    line-height: 60px;
  }
  div {
    margin-top: 140px;
    display: flex;
    justify-content: center;
    gap: 180px;
  }
`
const MoveToLinkBtn = styled.button`
  width: 200px;
  color: wheat;
  border: 1px solid white;
  border-radius: 30px;
  padding: 5px;
  p {
    font-size: 25px;
    font-weight: 800;
    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }
`
