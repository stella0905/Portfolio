import React, { useState } from 'react'
import { tteokguk } from '../../assets/index'
import * as CSS from './style'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { useTranslation } from 'react-i18next'
import { moveToLink } from '../../common/linkUrls'
import { styled } from 'styled-components'

const Tteokguk = () => {
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
        <ProjectSection isHovered={isHovered}>
          <h2>니떡국 내떡국</h2>
          <h3>{t('니떡국 내떡국은 설날 덕담을 주고 받을 수 있는 온라인 롤링페이퍼입니다.')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 상세보기 >')}
          </CSS.DetailBtn>
          <ProjectDiv>
            <img src={tteokguk} alt={'tteokguk'} />
            <CSS.ContentDiv>
              {t('팀 프로젝트')}
              <p>FE 4명, BE 1명, DE 1명</p>
              {t('프로젝트 기간')}
              <p>2023.12.17 ~ 2024.01.26 (1개월 소요)</p>
              {t('사용한 기술스텍')}
              <p>Next.js, TypeScript, Recoil, Axios, React-Query, Tailwind</p>
              <GitHubDiv>
                <button onClick={() => moveToLink('tteokgukDisQuietNews')}>
                  DisQuiet News
                  <Arrow width="40" height="40" fill="black" />
                </button>
              </GitHubDiv>
              <CSS.EmptyDiv />
              <CSS.MoveToBox>
                <button onClick={() => moveToLink('tteokgukSite')}>
                  Website
                  <Arrow width="40" height="40" fill="black" />
                </button>
                <button onClick={() => moveToLink('tteokgukGithub')}>
                  HitHub
                  <Arrow width="40" height="40" fill="black" />
                </button>
              </CSS.MoveToBox>
            </CSS.ContentDiv>
          </ProjectDiv>
        </ProjectSection>
      ) : (
        <ProjectSection>
          <h2>니떡국 내떡국</h2>
          <h3>{t('니떡국 내떡국은 설날 덕담을 주고 받을 수 있는 온라인 롤링페이퍼입니다.')}</h3>
          <CSS.DetailBtn onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleUpperSection}>
            {t('< 요약보기 >')}
          </CSS.DetailBtn>
          <CSS.DetailBox>
            <CSS.DetailContentDiv>
              {t('프로젝트 설명')}
              <p>
                {t(
                  `떡국을 공유하고 덕담을 주고받을 수 있다. 고명을 고르기 어렵다면 랜덤 고명 뽑기가 가능하다. 덕담을 남기고, 나의 캐릭터로 사진을 찍을 수 있다.`,
                )}
              </p>
              <br />

              {t('주요 기능')}
              <p>{t('랜덤룰렛, 고명작성, 이미지 캡쳐, 마이페이지, 떡국 렌더링')}</p>
            </CSS.DetailContentDiv>
            <CSS.DetailContentDiv>
              {t('프로젝트에 기여한점')}
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('html2canvas를 사용하여 화면 캡쳐 후 자동 저장 기능 구현')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('다양한 사용자를 고려하여 PC뿐만 아니라 모바일, 카카오인앱까지 크로스 브라우징으로 구현')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('로컬/디벨롭/프로덕션마다 다른 base url을 환경변수로 구분하여 링크 복사 기능 구현')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('상황에 따라 SSR, CSR로 구분하여 렌더링')}</p>
              </CSS.ContributionsDiv>
              <CSS.ContributionsDiv>
                <p>💡</p>
                <p>{t('조건에 따른 동적 조회 및 페이지네이션 기능 구현')}</p>
              </CSS.ContributionsDiv>
            </CSS.DetailContentDiv>
          </CSS.DetailBox>
        </ProjectSection>
      )}
    </>
  )
}

export default Tteokguk

const ProjectDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  img {
    width: 400px;
    height: 450px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 360px;
    }
  }
`
const ProjectSection = styled.section`
  width: 850px;
  height: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  color: #101820;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 360px;
  }

  will-change: transform;
  transform-style: preserve-3d; /* 3D 변환을 위한 설정 */
  transform: perspective(1000px) rotateY(0deg); /* 초기 회전 값 및 원근 효과 추가 */
  transition: transform 0.3s ease; /* transform 속성에 대한 트랜지션 효과 추가 */

  &:hover {
    transform: ${(props) => (props.isHovered ? 'perspective(1000px) rotateY(-10deg)' : 'transform')};
  }

  /* background-color: #ffdfb9;
  color: #a4193d; */
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
    text-align: center;
  }
  h3 {
    margin-top: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #63605f;
  }
`
const GitHubDiv = styled.div`
  position: absolute;
  bottom: 90px;
  button {
    display: flex;

    align-items: center;

    background-color: transparent;
    border: none;
    color: #101820;
    font-size: 20px;
    font-weight: 700;
    &:hover {
      transform: scale(1.02);
      transition: 0.2s;
    }
  }
`
