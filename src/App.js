import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addblog from './components/Addblog'

const App = () => {
  return (
    <BrowserRouter>
        <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Addblog/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
