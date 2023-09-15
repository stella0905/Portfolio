import React from 'react'
import { styled } from 'styled-components'
import defaultImg from '../assets/defaultImg.png'

const Projects = () => {
  return (
    <Background id={'project'}>
      <h1>PROJECTS</h1>
      <ProjectSection>
        <h2>DIE DIE</h2>
        <ProjectDiv>
          <img src={defaultImg} alt={'defaultImg'} />
          <ContentDiv>
            팀 프로젝트<p>2명</p>
            프로젝트 기간<p>진행중</p>
          </ContentDiv>
        </ProjectDiv>
      </ProjectSection>
    </Background>
  )
}

export default Projects

const Background = styled.div`
  width: 100vw;
  height: 100%;
  padding: 50px;
  background-color: #101820;
  color: #f2aa4c;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    text-align: center;
    margin-bottom: 40px;
  }
`
const ProjectSection = styled.section`
  width: 800px;
  height: 100%;
  padding: 20px;
  /* background-color: #ffffff;
  color: #f95700; */
  background-color: #ffdfb9;
  color: #a4193d;
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    text-align: center;
  }
`
const ProjectDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  img {
    width: 450px;
    height: 400px;
  }
`
const ContentDiv = styled.div`
  width: 300px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  p {
    color: #80200a;
    font-size: 18px;
    font-weight: 400;
  }
`
