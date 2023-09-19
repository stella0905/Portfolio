import React, { useState } from 'react'
import hanghaeCapsule from '../../assets/hanghaeCapsule.gif'
import * as CSS from './style'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

const HanghaeCapsule = ({ moveToLink }) => {
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
          <h2>항해캡슐</h2>
          <h3>부트캠프를 잘 완수한 나에게 쓰는 타임캡슐 서비스 </h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 상세보기 >'}
          </CSS.DetailBtn>
          <CSS.ProjectDiv>
            <img src={hanghaeCapsule} alt={'hanghaeCapsuleImg'} />
            <CSS.ContentDiv>
              팀 프로젝트<p>FE 1명, BE 1명</p>
              프로젝트 기간
              <p>
                2023.03.10 ~ 2023.04.03 <br />
                ➡️ 2023.07.08 ~ 2023.07.09
              </p>
              사용한 기술스텍
              <p>
                React, JavaScript, Recoil, Axios,
                <br /> React-Query, styled-component
              </p>
              <CSS.MoveToBox>
                <button onClick={() => moveToLink('hanghaeCapsuleGithub')}>
                  GitHub
                  <Arrow width="40" height="40" fill="black" />
                </button>
              </CSS.MoveToBox>
            </CSS.ContentDiv>
          </CSS.ProjectDiv>
        </CSS.ProjectSection>
      ) : (
        <CSS.ProjectSection>
          <h2>항해캡슐</h2>
          <h3>부트캠프를 잘 완수한 나에게 쓰는 타임캡슐 서비스 </h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 요약보기 >'}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              프로젝트 설명
              <p>
                부트캠프 시작전에 수료시점의 나에게 타임캡슐을 작성하는 서비스이며 독학하면서 구현에만 급급했던 코드와
                유지 보수성을 고려한 코드의 차이점을 직접 비교해보기 위해 V2구현
              </p>
              <br />
              주요 기능
              <p>편지 작성, 이메일 인증, 응원글 작성, 타이머</p>
              <br />
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              프로젝트에 기여한점
              <p>
                💡 recoil-persist + 세션 스토리지 <br /> &nbsp;&nbsp;&nbsp;&nbsp;새로고침 시 편지 내용이 초기화되는 걸
                방지 및 <br />
                &nbsp;&nbsp;&nbsp; 최초로 인증번호 발송한 이메일과 동일한 <br />
                &nbsp;&nbsp;&nbsp; 이메일로 재발송 요청인지 구분하기 위함
                <br /> 💡 header를 컴포넌트마다 넣지 않고 <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Layout으로 관리 - 코드의 간결성을 위함.
                <br /> 💡 API 요청 fetch → Axios <br /> &nbsp;&nbsp;&nbsp;&nbsp;자동으로 JSON 변환을 해주며, 더 편리하게
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;작업할 수 있는 API 디자인을 가짐. <br />
              </p>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </CSS.ProjectSection>
      )}
    </>
  )
}

export default HanghaeCapsule
