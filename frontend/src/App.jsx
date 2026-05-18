import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import StrainDetailPage from './pages/StrainDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={() => toast.error('Success!')}>Click me!</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/strain/:id" element={<StrainDetailPage />} />
      </Routes>
    </div>
  )
}

export default App