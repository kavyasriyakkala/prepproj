import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Aboutus from './pages/aboutus'
import Mater from './pages/mater'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/matter' element={<Mater/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
