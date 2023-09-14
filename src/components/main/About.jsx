import React from 'react'
import about from '../assets/about.png'
import { styled } from 'styled-components'

const About = () => {
  return (
    <AboutDiv>
      <ContentDiv>
        <h1>- 최유리 -</h1>
        <p>협업과 지식 공유를 중요시하는 프론트엔드 개발자 입니다.</p>
        <p>다른 동료들과 함께 지식을 나누고 함께 성장하는 것에 큰 관심을 가지고 있습니다.</p>
        <p>시각적 피드백과 즉각적인 결과물에서 성취감을 느껴 프론트엔드 개발을 시작하였습니다.</p>
        <p>어떻게든 해내겠다는 의지와 쉽게 포기하지않는 근성이 저의 장점입니다.</p>
      </ContentDiv>
    </AboutDiv>
  )
}

export default About

const AboutDiv = styled.div`
  height: 700px;
  background-image: url(${about});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
`

const ContentDiv = styled.div`
  /* border: 1px solid red; */
  margin-top: 180px;
  color: white;
  h1 {
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
  p {
    font-size: 25px;
    font-weight: 500;
    line-height: 60px;
  }
`
