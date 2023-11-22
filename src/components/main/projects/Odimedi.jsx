import React, { useState } from 'react'
import odimedi from '../../assets/odimedi.gif'
import * as CSS from './style'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const Odimedi = ({ moveToLink }) => {
  const { t } = useTranslation()

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
          <h3>{t('서울 내 외국어 가능 약국 찾기 서비스')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 상세보기 >')}
          </CSS.DetailBtn>
          <CSS.ProjectDiv>
            <img src={odimedi} alt={'odimediImg'} />
            <CSS.ContentDiv>
              {t('팀 프로젝트')}
              <p>FE 1명, BE 3명, PD 1명</p>
              {t('프로젝트 기간')}
              <p>2023.05.19 ~ 2023.06.30</p>
              {t('사용한 기술스텍')}
              <p>React, JavaScript, Recoil, kakaomap api, Axios, React-Query, styled-component</p>
              <CSS.MoveToBox>
                <button onClick={() => moveToLink('odimediGithub')}>
                  GitHub
                  <Arrow width="40" height="40" fill="black" />
                </button>
              </CSS.MoveToBox>
            </CSS.ContentDiv>
          </CSS.ProjectDiv>
        </CSS.ProjectSection>
      ) : (
        <CSS.ProjectSection>
          <h2>오디약</h2>
          <h3>{t('서울 내 외국어 가능 약국 찾기 서비스')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 요약보기 >')}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              {t('프로젝트 설명')}
              <p>
                {t(
                  '1999년도부터 2017년까지 외국인들의 의료시설 이용 불편의 문제가 해결되지 않았고, 2021년에는 설문조사를 바탕으로 작성된 논문에서도 같은 문제가 여전히 해결되지 않았음. 이러한 배경으로 외국어 구사가 가능한 약국 정보를 제공하는 프로젝트를 계획',
                )}
              </p>
              <br />

              {t('주요 기능')}
              <p>{t('지도 API, 조건별 검색필터, 댓글기능, 마이페이지, 북마크, 랭킹 조회')}</p>
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              {t('프로젝트에 기여한점')}
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('전체 UI/UX 전부 구현')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('약국 검색 조건 값이 초기화되어 불편하다는 의견을 해결하고자 recoil 적용하여 해결')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('버튼 연속 클릭시 500에러 발생 하여 `디바운싱` 기능을 통해 북마크의 연속클릭을 제한함')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('KakaoMap Api 연동')}</p>
              </CSS.ContributionsDiv>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </CSS.ProjectSection>
      )}
    </>
  )
}

export default Odimedi
