import React, { useState } from 'react'
import odimedi from '../../assets/odimedi.gif'
import * as CSS from './style'

const Odimedi = ({ moveToLink }) => {
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
          <h2>오디약</h2>
          <h3>서울 내 외국어 가능 약국 찾기 서비스</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 상세보기 >'}
          </CSS.DetailBtn>
          <CSS.ProjectDiv>
            <img src={odimedi} alt={'odimediImg'} />
            <CSS.ContentDiv>
              팀 프로젝트<p>FE 1명, BE 3명, PD 1명</p>
              프로젝트 기간<p>2023.05.19 ~ 2023.06.30</p>
              사용한 기술스텍
              <p>React, JavaScript, Recoil, kakaomap api, Axios, React-Query, styled-component</p>
              <CSS.MoveToBox>
                <button onClick={() => moveToLink('odimediGithub')}>GitHub ➡️</button>
              </CSS.MoveToBox>
            </CSS.ContentDiv>
          </CSS.ProjectDiv>
        </CSS.ProjectSection>
      ) : (
        <CSS.ProjectSection>
          <h2>오디약</h2>
          <h3>서울 내 외국어 가능 약국 찾기 서비스</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {'< 요약보기 >'}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              프로젝트 설명
              <p>
                1999년도부터 2017년까지 외국인들의 의료시설 이용 불편의 문제가 해결되지 않았고, 2021년에는 설문조사를
                바탕으로 작성된 논문에서도 같은 문제가 여전히 해결되지 않았음. 이러한 배경으로 외국어 구사가 가능한 약국
                정보를 제공하는 프로젝트를 계획
              </p>
              <br />
              주요 기능
              <p>💡 지도 API, 조건별 검색필터, 댓글기능, 마이페이지, 북마크, 랭킹 조회</p>
              <br />
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              프로젝트에 기여한점
              <p>
                💡 전체 UI/UX 전부 구현 <br />
                💡 약국 검색 조건 값이 초기화되어 불편하다는 의견을 해결하고자 recoil 적용하여 해결
                <br />
                💡 버튼 연속 클릭시 500에러 발생 하여 `디바운싱` 기능을 통해 북마크의 연속클릭을 제한함 <br />
                💡 KakaoMap Api 연동 <br />
              </p>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </CSS.ProjectSection>
      )}
    </>
  )
}

export default Odimedi
