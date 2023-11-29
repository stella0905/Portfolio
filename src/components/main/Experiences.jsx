import React from 'react'
import Slider from 'react-slick'
import { styled } from 'styled-components'
import Study from '../experience/Study'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Education from '../experience/Education'

const Experiences = () => {
  const setting = {
    slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true, //드래그 가능 여부
    arrows: true, //이전 다음 버튼 표시 여부(true or false) ▶기본값 true
  }
  return (
    <Background id={'experience'}>
      <h1>experience</h1>
      <StyledSlider {...setting}>
        <div>
          <Education />
        </div>
        <div>
          <Study />
        </div>
      </StyledSlider>
    </Background>
  )
}

export default Experiences
const Background = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 350px;
  padding-right: 350px;
  padding-bottom: 100px;
  background-color: #364b44;
  color: #f2aa4c;
  @media screen and (max-width: 1350px) {
    padding-left: 280px;
    padding-right: 280px;
  }
  @media screen and (max-width: 1220px) {
    padding-left: 200px;
    padding-right: 200px;
  }
  @media screen and (max-width: 1050px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 860px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  h1 {
    margin-top: 80px;

    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`
const StyledSlider = styled(Slider)`
  .container {
    width: 100%;
    height: 100%;
    margin: 5%;
    border: 1px solid red;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    height: 100%;
    border: none;
    box-sizing: border-box;
  }

  .slick-slide div {
    object-fit: cover;
    height: 100%;
    box-sizing: border-box;
    margin-bottom: 7px;
  }
  @media screen and (max-width: 860px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`
