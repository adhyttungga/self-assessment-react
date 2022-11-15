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
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CForm,
  CFormLabel,
  CFormInput,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import kebutuhanTraining from './_kt'

const KebutuhanTraining = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedRole = useSelector((state) => state.selectedRole)
  const jawabanKT = useSelector((state) => state.jawabanKT)

  const [modal, setModal] = React.useState(false)
  const [newTraining, setNewTraining] = React.useState({
    role: '',
    nama_training: '',
    training: '',
    sertifikasi: '',
  })

  const handleRow = (e, type) => {
    const id = e.target.id // role
    const name = e.target.name // nama_training
    const value = e.target.value
    const newJawaban = jawabanKT.map((element) => {
      if (element.role === id && element.nama_training === name.split('_')[0]) {
        element[type] = value
      }

      return element
    })

    dispatch({ type: 'set', jawabanKT: newJawaban })
  }

  const handleAdd = () => {
    dispatch({ type: 'set', jawabanKT: jawabanKT.concat(newTraining) })
    setNewTraining({ ...newTraining, nama_training: '' })
    setModal(false)
  }

  const handleModal = (role) => {
    setNewTraining({ ...newTraining, role: role })
    setModal(!modal)
  }

  React.useEffect(() => {
    if (!selectedRole.utama) {
      navigate('/self-assessment/data-diri')
    } else if (jawabanKT?.length === 0) {
      const listRole = []
      selectedRole &&
        Object.values(selectedRole)?.forEach((item) => {
          item?.role && listRole.push(item?.role)
        })
      const listSoal = kebutuhanTraining.filter((element) => listRole.includes(element.role))
      const newListJawaban = listSoal.map((element) => {
        element.training = ''
        element.sertifikasi = ''
        return element
      })

      dispatch({ type: 'set', jawabanKT: newListJawaban })
    }
  }, [])

  return (
    <>
      <CModal visible={modal} onClose={() => setModal(false)} backdrop={'static'}>
        <CModalHeader>
          <CModalTitle>Tambah Training Lainnya</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CForm>
            <CFormLabel>New Training</CFormLabel>

            <CFormInput
              type="text"
              name="new_training"
              id="new_training"
              value={newTraining.nama_training}
              onChange={(e) => setNewTraining({ ...newTraining, nama_training: e.target.value })}
            />
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="info" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>

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
                                      id={item_1}
                                      value="ya"
                                      defaultChecked={item_2.training === 'ya'}
                                      onClick={(e) => handleRow(e, 'training')}
                                    />

                                    <CFormCheck
                                      inline
                                      label="T"
                                      type="radio"
                                      name={`${item_2.nama_training}_training`}
                                      id={item_1}
                                      value="tidak"
                                      defaultChecked={item_2.training === 'tidak'}
                                      onClick={(e) => handleRow(e, 'training')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${80 / 3}%` }}>
                                    <CFormCheck
                                      inline
                                      label="Y"
                                      type="radio"
                                      name={`${item_2.nama_training}_sertifikasi`}
                                      id={item_1}
                                      value="ya"
                                      defaultChecked={item_2.sertifikasi === 'ya'}
                                      onClick={(e) => handleRow(e, 'sertifikasi')}
                                    />

                                    <CFormCheck
                                      inline
                                      label="T"
                                      type="radio"
                                      name={`${item_2.nama_training}_sertifikasi`}
                                      id={item_1}
                                      value="tidak"
                                      defaultChecked={item_2.sertifikasi === 'tidak'}
                                      onClick={(e) => handleRow(e, 'sertifikasi')}
                                    />
                                  </CTableDataCell>
                                </CTableRow>
                              ))}

                          <CTableRow>
                            <CTableDataCell colSpan="4">
                              <CButton color="info" size="lg" onClick={() => handleModal(item_1)}>
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
              <CButton
                color="info"
                size="lg"
                onClick={() => navigate('/self-assessment-soal/duj-tools')}
              >
                Kembali
              </CButton>
            </CCol>

            <CCol className="d-grid">
              <CButton
                color="info"
                size="lg"
                onClick={() => navigate('/self-assessment-soal/duj-tools')}
              >
                Submit
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default KebutuhanTraining
