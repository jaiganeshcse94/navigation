import React from 'react'
import Card from './component/card'
import Header from './component/header'
import Datascience from './component/datascience';
import Cybersecurity from './component/cybersecurity';
import Fullstack from './component/fullstack';
import Career from './component/career';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return <>
  <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Card/>}></Route>
            <Route path="/all" element={<Card/>}></Route>
            <Route path="/full-stack" element={<Fullstack/>}></Route>
            <Route path="/data-science" element={<Datascience/>}></Route>
            <Route path="/cyber-security" element={<Cybersecurity/>}></Route>
            <Route path="/career" element={<Career/>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
  </>
}

export default App