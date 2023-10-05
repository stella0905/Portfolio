import React, { useState } from 'react'
import diedie from '../../assets/diedie.gif'
import * as CSS from './style'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'

const DieDie = ({ moveToLink }) => {
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
          <h2>DIE DIE</h2>
          <h3>{t('롤 악성 유저 신고 서비스')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 상세보기 >')}
          </CSS.DetailBtn>
          <CSS.ProjectDiv>
            <img src={diedie} alt={'diedieImg'} />
            <CSS.ContentDiv>
              {t('팀 프로젝트')}
              <p>FE 4명, BE 3명, PD 1명</p>
              {t('프로젝트 기간')}
              <p>진행중</p>
              {t('사용한 기술스텍')}
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
          <h3>{t('롤 악성 유저 신고 서비스')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 요약보기 >')}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              {t('프로젝트 설명')}
              <p>
                {t(
                  '게임 내에서 욕설을 하는 악성 유저를 신고하는 커뮤니티,게임 화면을 캡처해서 올릴 수 있으며 라이엇 API와 연동해 게임 유저를 검색 할 수 있다.',
                )}
              </p>
              <br />
              {t('주요 기능')}
              <p>
                {t('다국어 처리, 반응형, 유저 검색, 파일 업로드, 랭킹 조회')}
                <br />
              </p>
              <br />
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              {t('프로젝트에 기여한점')}
              <CSS.ContributionsDiv>
                <p>💡</p> <p>{t('타입스크립트와 반응형을 도전과제로 구현')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('axios interceptor에서 http method 호출 및 응답 try-catch 코드 추상화 진행')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p> <p>{t('해외게임 특성상 react-i18next를 사용하여 다국어 처리함.')}</p>
              </CSS.ContributionsDiv>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </CSS.ProjectSection>
      )}
    </>
  )
}

export default DieDie
