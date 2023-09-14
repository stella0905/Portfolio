import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './main/Header'
import { styled } from 'styled-components'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
