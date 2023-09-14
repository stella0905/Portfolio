import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return <HeaderCSS>Header</HeaderCSS>
}

export default Header

const HeaderCSS = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 60px;
  position: fixed;
`
