import React from 'react'
import {
  CHeader,
  CHeaderBrand,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CRow,
  CCol,
  CButton,
  CContainer,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

import BRISVI from 'src/assets/images/BRIxSVI.png'

import departemen from './_duj'

const PilihRole = React.lazy(() => import('./PilihRole'))
const PilihSkill = React.lazy(() => import('./PilihSkill'))

const SelfAssessment = () => {
  const formDiri = useSelector((state) => state.formDiri)
  const dispatch = useDispatch()

  const department = [...new Set(departemen.map((item) => item.departemen))]
  const unit = [
    ...new Set(
      departemen
        .filter((item) => item.departemen === formDiri.department)
        ?.map((item) => item.fungsi),
    ),
  ]

  const handleSelect = (e) => {
    const id = e.target.id
    const value = e.target.value

    dispatch({ type: 'set', formDiri: { ...formDiri, [id]: value } })

    if (id === 'department') {
      dispatch({ type: 'set', formDiri: { ...formDiri, fungsi: '' } })
    }
  }

  const handleSubmit = (e) => {}

  return (
    <>
      <CHeader className="mb-4 border-0">
        <div>
          <CHeaderBrand className="mx-auto">
            <img className="d-block w-100" src={BRISVI} alt="logo BRI x SVI" />
          </CHeaderBrand>
        </div>

        <CContainer fluid>
          <h2 className="flex-grow-1">Input Data Diri</h2>
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

      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="namaPekerja" className="col-sm-2 col-form-label text-nowrap">
            Nama Pekerja
          </CFormLabel>

          <CFormInput
            type="text"
            id="namaPekerja"
            placeholder="Masukan nama anda..."
            onChange={handleSelect}
          />
        </div>

        <CRow className="mb-3">
          <CCol md={6}>
            <CFormLabel htmlFor="noPN" className="col-sm-2 col-form-label text-nowrap">
              No. PN
            </CFormLabel>

            <CFormInput
              type="text"
              id="noPN"
              placeholder="Masukan no. PN anda..."
              onChange={handleSelect}
            />
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="status" className="col-sm-2 col-form-label text-nowrap">
              Status
            </CFormLabel>

            <CFormInput
              type="text"
              id="status"
              placeholder="Masukan status..."
              onChange={handleSelect}
            />
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="department" className="col-sm-2 col-form-label text-nowrap">
              Departemen
            </CFormLabel>

            <CFormSelect
              id="department"
              name="department"
              onChange={handleSelect}
              value={formDiri.departement}
            >
              <option value="">Pilih departemen anda...</option>
              {department.map((item, i) => (
                <option value={item} key={`opt_dept_${i}`}>
                  {item}
                </option>
              ))}
            </CFormSelect>
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="fungsi" className="col-sm-2 col-form-label text-nowrap">
              Fungsi
            </CFormLabel>

            <CFormSelect id="fungsi" name="fungsi" onChange={handleSelect} value={formDiri.fungsi}>
              <option value="">Pilih fungsi...</option>
              {unit.map((item, i) => (
                <option value={item} key={`opt_unit_${i}`}>
                  {item}
                </option>
              ))}
            </CFormSelect>
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="email" className="col-sm-2 col-form-label text-nowrap">
              Email
            </CFormLabel>

            <CFormInput
              type="email"
              id="email"
              placeholder="Masukan email anda..."
              onChange={handleSelect}
            />
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="corporateTitle" className="col-sm-2 col-form-label text-nowrap">
              Corporate Title
            </CFormLabel>

            <CFormSelect
              id="corporateTitle"
              name="corporateTitle"
              onChange={handleSelect}
              value={formDiri.corporateTitle}
            >
              <option value="">Pilih corporate title anda...</option>
              <option value="VP">VP</option>
              <option value="Assistant VP">Assistant VP</option>
              <option value="Senior Manager">Senior Manager</option>
              <option value="Manager">Manager</option>
              <option value="Assistant Manager">Assistant Manager</option>
              <option value="Officer">Officer</option>
            </CFormSelect>
          </CCol>
        </CRow>

        <div className="mb-3 d-grid">
          <CButton color="primary" size="lg">
            Selanjutnya
          </CButton>
        </div>
      </CForm>

      <PilihRole />

      <PilihSkill />
    </>
  )
}

export default SelfAssessment
