import React from 'react'
import { styled } from 'styled-components'
import { css, figma, github, html, javascript, react, recoil, redux, styledcomponents, vercel } from '../assets/skills'
import { useTranslation } from 'react-i18next'

const Skill = () => {
  const { t } = useTranslation()

  const skills = [
    {
      img: html,
      name: 'HTML',
      desc: '웹표준을 준수합니다.',
    },
    {
      img: css,
      name: 'CSS',
      desc: '애니메이션\r\n크로스브라우징',
    },
    {
      img: javascript,
      name: 'JavaScript',
      desc: 'ES6문법에 익숙합니다.\r\n엔진 동작 원리에 관심이 많습니다.',
    },
    {
      img: react,
      name: 'React',
      desc: '컴포넌트 재사용\r\n랜더링 최적화',
    },
    {
      img: redux,
      name: 'Redux',
      desc: 'Redux\n\r활용한 전역 상태 관리',
    },
    {
      img: recoil,
      name: 'Recoil',
      desc: 'Recoil\n\r활용한 전역 상태 관리',
    },
    {
      img: styledcomponents,
      name: 'styled-components',
      desc: 'props를 통한 동적 스타일링에 관심이 많습니다.',
    },
    {
      img: figma,
      name: 'Figma',
      desc: 'Figma로 디자이너와\n\r협업이 가능합니다.',
    },
    {
      img: github,
      name: 'Git/GitHub',
      desc: '형상관리 및 협업\n\rFork,PR 활용',
    },
    {
      img: vercel,
      name: 'Vercel',
      desc: 'Vercel을 활용한\n\r정적 페이지 배포 경험',
    },
  ]
  return (
    <Background id={'skill'}>
      <h1>SKILL</h1>
      <SkillItemWrap>
        {skills.map((skill, idx) => {
          return (
            <SkillWrapDiv>
              <SkillImg src={skill.img} />
              <SkillName>{skill.name}</SkillName>
              <SkillDesc>{t(skill.desc)}</SkillDesc>
            </SkillWrapDiv>
          )
        })}
      </SkillItemWrap>
    </Background>
  )
}

export default Skill

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
    margin-top: 80px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`
const SkillItemWrap = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`
const SkillImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`
const SkillName = styled.h3`
  font-size: 45px;
  font-weight: 900;
  text-align: center;
  color: #8b949e;
`
const SkillDesc = styled.p`
  position: absolute;
  font-size: 25px;
  font-weight: 300;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  left: 0px;
  white-space: pre-wrap;
`
const SkillWrapDiv = styled.div`
  display: flex;
  position: relative;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  height: 130px;
  border-radius: 10px;
  width: fit-content;
  ${SkillDesc} {
    visibility: hidden;
    opacity: 0;
    width: 0px;
  }
  &:hover {
    transition: 0.3s;
    box-shadow: inset 0 0 0 2px #ffffff;
    ${SkillImg}, ${SkillName} {
      visibility: hidden;
      opacity: 0;
    }
    ${SkillDesc} {
      visibility: initial;
      opacity: 1;
      width: 100%;
    }
  }
`
