import React from 'react'
import { CForm, CFormLabel, CFormInput, CFormSelect, CRow, CCol, CButton } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import departemen from './_duj'

const DataDiri = () => {
  const navigate = useNavigate()
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
  const isiFormDiri = Object.values(formDiri)

  const handleSelect = (e) => {
    const id = e.target.id
    const value = e.target.value

    if (id === 'department') {
      dispatch({ type: 'set', formDiri: { ...formDiri, [id]: value, fungsi: '' } })
    } else {
      dispatch({ type: 'set', formDiri: { ...formDiri, [id]: value } })
    }
  }

  const handleSubmit = (e) => {
    navigate('/self-assessment/pilih-role')
    localStorage.setItem('formDiri', JSON.stringify(formDiri))
  }

  React.useEffect(() => {
    if (localStorage.getItem('formDiri')) {
      dispatch({ type: 'set', formDiri: JSON.parse(localStorage.getItem('formDiri')) })
    }
  }, [])

  return (
    <>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="namaPekerja" className="col-sm-2 col-form-label text-nowrap">
            Nama Pekerja
          </CFormLabel>

          <CFormInput
            type="text"
            id="namaPekerja"
            placeholder="Masukan nama anda..."
            value={formDiri.namaPekerja}
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
              value={formDiri.noPN}
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
              value={formDiri.status}
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
              value={formDiri.department}
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
              value={formDiri.email}
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
          <CButton
            color="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={isiFormDiri.includes('')}
          >
            Selanjutnya
          </CButton>
        </div>
      </CForm>
    </>
  )
}

export default DataDiri
