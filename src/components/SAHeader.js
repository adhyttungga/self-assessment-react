import React from 'react'
import { CCol, CContainer, CHeader, CHeaderBrand, CRow } from '@coreui/react'

import BRISVI from 'src/assets/images/BRIxSVI.png'

const SAHeader = () => {
  return (
    <CHeader className="mb-4 border-0 flex-column">
      <div className="align-self-baseline mx-3 mb-5 mt-3">
        <CHeaderBrand className="mx-auto">
          <img className="d-block w-100" src={BRISVI} alt="logo BRI x SVI" />
        </CHeaderBrand>
      </div>

      <CContainer lg className="mt-5">
        <h1 className="flex-grow-1">Input Data Diri</h1>
        <CRow className="rounded-pill border border-light">
          <CCol xs={4}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                1
              </span>
              <span className="align-middle mx-2">Data Diri</span>
            </div>
          </CCol>
          <CCol xs={4}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                2
              </span>
              <span className="align-middle mx-2">Pilih Role</span>
            </div>
          </CCol>
          <CCol xs={4}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                3
              </span>
              <span className="align-middle mx-2">Pilih Skill</span>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </CHeader>
  )
}

export default SAHeader
