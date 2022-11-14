import React from 'react'
import { PertanyaanContent, PertanyaanHeader } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'

const PertanyaanLayout = () => {
  return (
    <div>
      {console.log(localStorage.getItem('formDiri'))}
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
