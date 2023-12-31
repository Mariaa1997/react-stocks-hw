import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Nav from './components/Nav';

function App() {
  

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/stocks' element={<Dashboard/>} />
        <Route path='/stocks/:symbol' element={<Stock/>}/>
      </Routes>

    </div>
  )
}

export default App
