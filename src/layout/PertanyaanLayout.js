import React from 'react'
import { PertanyaanContent, PertanyaanHeader } from '../components/index'

const PertanyaanLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-white">
        <PertanyaanHeader />
        <div className="body flex-grow-1 px-3">
          <PertanyaanContent />
        </div>
      </div>
    </div>
  )
}

export default PertanyaanLayout
