import React from 'react'
import { PertanyaanContent, PertanyaanHeader, TheSidebar } from '../components/index'

const PertanyaanLayout = () => {
  return (
    <div>
      <TheSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-white sidebar-end">
        <PertanyaanHeader />
        <div className="body flex-grow-1 px-3">
          <PertanyaanContent />
        </div>
      </div>
    </div>
  )
}

export default PertanyaanLayout
