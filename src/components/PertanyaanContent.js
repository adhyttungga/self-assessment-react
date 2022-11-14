import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

const SelfAssessment1 = React.lazy(() => import('./../views/pertanyaan/SelfAssessment1'))
const SelfAssessment2 = React.lazy(() => import('./../views/pertanyaan/SelfAssessment2'))
const DUJTools = React.lazy(() => import('./../views/pertanyaan/DUJTools'))
const KebutuhanTraining = React.lazy(() => import('./../views/pertanyaan/KebutuhanTraining'))
const InformasiSkill = React.lazy(() => import('./../views/pertanyaan/InformasiSkill'))

const PertanyaanContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route
            path="/self-assessment-1"
            exact
            name="Self Assessment 1"
            element={<SelfAssessment1 />}
          />
          <Route
            path="/self-assessment-2"
            exact
            name="Self Assessment 2"
            element={<SelfAssessment2 />}
          />
          <Route path="/duj-tools" exact name="DUJ & Tools" element={<DUJTools />} />
          <Route
            path="/kebutuhan-training"
            exact
            name="Kebutuhan Training"
            element={<KebutuhanTraining />}
          />
          <Route
            path="/informasi-skill"
            exact
            name="Informasi Skill"
            element={<InformasiSkill />}
          />
          <Route path="/" element={<Navigate to="self-assessment-1" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(PertanyaanContent)
