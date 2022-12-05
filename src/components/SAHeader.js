import React from 'react'
import { CCol, CContainer, CHeader, CHeaderBrand, CRow } from '@coreui/react'
import { useLocation } from 'react-router-dom'

import BRISVI from 'src/assets/images/BRIxSVI.png'

const SAHeader = () => {
  const currentLocation = useLocation().pathname
  const routeName = currentLocation.split('/')?.findLast((element) => element)
  return (
    <CHeader className="mb-4 border-0 flex-column">
      <div className="align-self-baseline mx-3 mb-5 mt-3">
        <CHeaderBrand className="mx-auto">
          <img className="d-block w-100" src={BRISVI} alt="logo BRI x SVI" />
        </CHeaderBrand>
      </div>

      <CContainer lg className="mt-5">
        {routeName === 'data-diri' && <h1 className="flex-grow-1 fw-semibold">Input Data Diri</h1>}

        {routeName === 'pilih-role' && <h1 className="flex-grow-1 fw-semibold">Pilih Role</h1>}

        {routeName === 'pilih-skill' && <h1 className="flex-grow-1 fw-semibold">Pilih Skill</h1>}

        <CRow className="rounded-pill border border-light">
          <CCol xs={4} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-baseline ${
                  routeName === 'data-diri' && 'number-active'
                }`}
              >
                1
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-sm-inline ${
                  routeName === 'data-diri' && 'text-active'
                }`}
              >
                Data Diri
              </span>
            </div>
          </CCol>

          <CCol xs={4} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-baseline ${
                  routeName === 'pilih-role' && 'number-active'
                }`}
              >
                2
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-sm-inline ${
                  routeName === 'pilih-role' && 'text-active'
                }`}
              >
                Pilih Role
              </span>
            </div>
          </CCol>

          <CCol xs={4} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-baseline ${
                  routeName === 'pilih-skill' && 'number-active'
                }`}
              >
                3
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-sm-inline ${
                  routeName === 'pilih-skill' && 'text-active'
                }`}
              >
                Pilih Skill
              </span>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </CHeader>
  )
}

export default SAHeader
