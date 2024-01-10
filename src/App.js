import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sample01 from './pages/Sample01'
import Sample02 from './pages/Sample02'
import Sample03 from './pages/Sample03'
import Sample04 from './pages/Sample04'
import Sample05 from './pages/Sample05'
import Sample06 from './pages/Sample06'
import Sample07 from './pages/Sample07'
import Sample08 from './pages/Sample08'
import Sample09 from './pages/Sample09'
import Sample10 from './pages/Sample10'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/sample01' element={<Sample01 />} />
        <Route path='/sample02' element={<Sample02 />} />
        <Route path='/sample03' element={<Sample03 />} />
        <Route path='/sample04' element={<Sample04 />} />
        <Route path='/sample05' element={<Sample05 />} />
        <Route path='/sample06' element={<Sample06 />} />
        <Route path='/sample07' element={<Sample07 />} />
        <Route path='/sample08' element={<Sample08 />} />
        <Route path='/sample09' element={<Sample09 />} />
        <Route path='/sample10' element={<Sample10 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
