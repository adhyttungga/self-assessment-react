import React from 'react'
import { SAContent, SAHeader, TheSidebar } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'

const SALayout = () => {
  return (
    <div>
      <TheSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-white sidebar-end">
        <SAHeader />
        <div className="body flex-grow-1 px-3">
          <SAContent />
        </div>
      </div>
    </div>
  )
}

export default SALayout
