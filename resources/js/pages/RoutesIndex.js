/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Createjobs from './jobs/createjobs'
import Layout from './Layout'
import Matching from './matching/matching'
import Resume from './resume'

export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/createjobs" element={<Createjobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
