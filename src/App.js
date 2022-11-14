import React, { Component, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const SALayout = React.lazy(() => import('./layout/SALayout'))
const PertanyaanLayout = React.lazy(() => import('./layout/PertanyaanLayout'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/self-assessment/*" name="Self Assessment" element={<SALayout />} />
            <Route
              path="/self-assessment-soal/*"
              name="Self Assessment Soal"
              element={<PertanyaanLayout />}
            />
            <Route path="/" element={<Navigate to="/self-assessment" replace />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
