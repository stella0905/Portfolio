import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../page/Main'
import Layout from '../components/Layout'
import GlobalStyles from '../style/GlobalStyle'

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path={''} element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
