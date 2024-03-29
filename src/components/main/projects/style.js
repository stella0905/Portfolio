import { styled } from 'styled-components'

export const ProjectSection = styled.section`
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
export const DetailBtn = styled.button`
  background-color: transparent;
  /* background-color: red; */
  color: wheat;
  border: none;
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 20px;
`
export const ProjectDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  img {
    width: 400px;
    height: 320px;
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
export const ContentDiv = styled.div`
  /* background-color: red; */
  width: 320px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  p {
    color: #63605f;
    font-size: 15px;
    font-weight: 400;
  }
`
export const EmptyDiv = styled.div`
  width: 10px;
  height: 0px;
  @media screen and (max-width: 900px) {
    height: 120px;
  }
`
export const MoveToBox = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 40px;
  height: 40px;
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
export const DetailBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const DetailContentDiv = styled.div`
  padding-left: 20px;
  width: 400px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  @media screen and (max-width: 900px) {
    width: 330px;
  }
  p {
    color: #63605f;
    font-size: 16px;
    font-weight: 400;
  }
  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-bottom: 20px;
  }
`
export const ContributionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  p {
    color: #63605f;
    font-size: 16px;
    font-weight: 400;
  }
`
