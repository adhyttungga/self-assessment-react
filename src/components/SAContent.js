import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

const DataDiri = React.lazy(() => import('./../views/self-assessment/DataDiri'))
const PilihRole = React.lazy(() => import('./../views/self-assessment/PilihRole'))
const PilihSkill = React.lazy(() => import('./../views/self-assessment/PilihSkill'))

const SAContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route path="/data-diri" exact name="Data Diri" element={<DataDiri />} />
          <Route path="/pilih-role" exact name="Pilih Role" element={<PilihRole />} />
          <Route path="/pilih-skill" exact name="Pilih Skill" element={<PilihSkill />} />
          <Route path="/" element={<Navigate to="data-diri" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(SAContent)
