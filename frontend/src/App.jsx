import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import StrainDetailPage from './pages/StrainDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Router path="/" element={<HomePage />} />
        <Router path="/create" element={<CreatePage />} />
        <Router path="/strain/:id" element={<StrainDetailPage />} />
      </Routes>
    </div>
  )
}

export default App