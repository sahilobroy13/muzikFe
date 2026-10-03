import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import Library from './pages/Library'
// import { Library } from 'lucide-react'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/search' Component={Search}></Route>
        <Route path='/library' Component={Library}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
