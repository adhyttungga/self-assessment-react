import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CRow,
  CCol,
  CFormCheck,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import kebutuhanTraining from './_kt'

const KebutuhanTraining = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedRole = useSelector((state) => state.selectedRole)
  const jawabanKT = useSelector((state) => state.jawabanKT)

  React.useEffect(() => {
    // if (listSoal?.length === 0) {
    //   navigate('/self-assessment/data-diri')
    // } else if (jawabanKT?.length === 0) {
    const listRole = []
    selectedRole &&
      Object.values(selectedRole)?.forEach((item) => {
        console.log(item?.role)
        item?.role && listRole.push(item?.role)
      })
    console.log(selectedRole)
    console.log(listRole)

    const listSoal = kebutuhanTraining.filter((element) => listRole.includes(element.role))

    const newListJawaban = listSoal.map((element) => {
      element.training = null
      element.sertifikasi = ''
      return element
    })
    dispatch({ type: 'set', jawabanKT: newListJawaban })
    // }
  }, [])

  return (
    <CCard className="mb-4 border-0">
      <CCardBody className="p-0">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ width: '25%' }}>
                Role
              </CTableHeaderCell>

              <CTableHeaderCell scope="col" style={{ width: '35%' }}>
                Nama Training
              </CTableHeaderCell>

              <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                Apakah Training Diperlukan?
              </CTableHeaderCell>

              <CTableHeaderCell scope="col" style={{ width: '20%' }}>
                Apakah Perlu Sertifikasi?
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {jawabanKT &&
              [...new Set(jawabanKT.map((element) => element.role))].map((item_1, i) => (
                <CTableRow key={`soal_kt_${i}`}>
                  <CTableDataCell style={{ width: '25%' }}>{item_1}</CTableDataCell>

                  <CTableDataCell style={{ width: '75%' }} className="px-0" colSpan="3">
                    <CTable className="m-0">
                      <CTableBody>
                        {jawabanKT &&
                          jawabanKT
                            .filter((element) => element.role === item_1)
                            .map((item_2, idx) => (
                              <CTableRow key={`soal_kt_item_${idx}`}>
                                <CTableDataCell style={{ paddingTop: 0, width: `${140 / 3}%` }}>
                                  {item_2.nama_training}
                                </CTableDataCell>

                                <CTableDataCell style={{ paddingTop: 0, width: `${80 / 3}%` }}>
                                  <CFormCheck
                                    inline
                                    label="Y"
                                    type="radio"
                                    name={`${item_2.nama_training}_training`}
                                    id={`${item_2.nama_training}_training`}
                                    value="ya"
                                  />

                                  <CFormCheck
                                    inline
                                    label="T"
                                    type="radio"
                                    name={`${item_2.nama_training}_training`}
                                    id={`${item_2.nama_training}_training`}
                                    value="tidak"
                                  />
                                </CTableDataCell>

                                <CTableDataCell style={{ paddingTop: 0, width: `${80 / 3}%` }}>
                                  <CFormCheck
                                    inline
                                    label="Y"
                                    type="radio"
                                    name={`${item_2.nama_training}_sertifikasi`}
                                    id={`${item_2.nama_training}_training`}
                                    value="ya"
                                  />

                                  <CFormCheck
                                    inline
                                    label="T"
                                    type="radio"
                                    name={`${item_2.nama_training}_sertifikasi`}
                                    id={`${item_2.nama_training}_training`}
                                    value="tidak"
                                  />
                                </CTableDataCell>
                              </CTableRow>
                            ))}

                        <CTableRow>
                          <CTableDataCell colSpan="4">
                            <CButton color="info" size="lg">
                              Tambah Training Lainnya
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </CCardBody>

      <CCardFooter className="d-flex justify-content-end align-items-center">
        <CRow className="mx-0">
          <CCol className="d-grid">
            <CButton color="info" size="lg">
              Kembali
            </CButton>
          </CCol>

          <CCol className="d-grid">
            <CButton color="info" size="lg">
              Selanjutnya
            </CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  )
}

export default KebutuhanTraining
