import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import WordsColorsNumbers from './components/WordsColorsNumbers'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<Home />} path="/home"/>
          <Route element={<WordsColorsNumbers />} path="/:word" />
          <Route element={<WordsColorsNumbers />} path="/:word/:color/:backgroundColor" />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
