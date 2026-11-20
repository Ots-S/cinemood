import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './pages/Home'
import Layout from './layouts/Layout'

import './index.css'
import Mood from './pages/Mood'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/moods/:mood" element={<Mood />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
