import React, { useState } from 'react'
import diedie from '../../assets/diedie.gif'
import * as CSS from './style'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

const DieDie = ({ moveToLink }) => {
  const [isUpperHidden, setIsUpperHidden] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const toggleUpperSection = () => {
    setIsUpperHidden(!isUpperHidden)
  }
  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false)
    }
  }

  return (
    <>
      {isUpperHidden ? (
        <CSS.ProjectSection isHovered={isHovered}>
          <h2>DIE DIE</h2>
          <h3>롤 악성 유저 신고 서비스</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 상세보기 >'}
          </CSS.DetailBtn>
          <CSS.ProjectDiv>
            <img src={diedie} alt={'diedieImg'} />
            <CSS.ContentDiv>
              팀 프로젝트<p>FE 4명, BE 3명, PD 1명</p>
              프로젝트 기간<p>진행중</p>
              사용한 기술스텍
              <p>
                React, TypeScript, Recoil, Axios,
                <br /> React-Query, Styled-Component,
                <br /> React-i18next
              </p>
              <CSS.MoveToBox>
                <button onClick={() => moveToLink('diedieGithub')}>
                  GitHub
                  <Arrow width="40" height="40" fill="black" />
                </button>

                <button onClick={() => moveToLink('diedieSite')}>
                  Visit Website
                  <Arrow width="40" height="40" fill="black" />
                </button>
              </CSS.MoveToBox>
            </CSS.ContentDiv>
          </CSS.ProjectDiv>
        </CSS.ProjectSection>
      ) : (
        <CSS.ProjectSection>
          <h2>DIE DIE</h2>
          <h3>롤 악성 유저 신고 서비스</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 요약보기 >'}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              프로젝트 설명
              <p>
                게임 내에서 욕설을 하는 악성 유저를 신고하는 커뮤니티, 게임 화면을 캡처해서 올릴 수 있으며 라이엇 API와
                연동해 게임 유저를 검색 할 수 있다.
              </p>
              <br />
              주요 기능
              <p>
                다국어 처리, 반응형, 유저 검색, 파일 업로드,
                <br /> 랭킹 조회
              </p>
              <br />
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              프로젝트에 기여한점
              <p>
                💡 타입스크립트와 반응형을 도전과제로 구현 <br />
                💡 API 통신을 위해 instance 생성 및 API 코드를 &nbsp;&nbsp;&nbsp;&nbsp;공통으로 사용할 수 있는
                interceptors를 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;작성해서 코드 길이를 짧게는 3줄로 간결화함.
                <br />
                💡 해외게임 특성상 react-i18next를 사용하여 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;다국어 처리함.
              </p>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </CSS.ProjectSection>
      )}
    </>
  )
}

export default DieDie
