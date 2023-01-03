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
import * as XLSX from 'xlsx'
import CIcon from '@coreui/icons-react'
import { cilXCircle } from '@coreui/icons'
import ImgWarning from 'src/assets/images/img_warning.svg'
import ImgCheck from 'src/assets/images/img_check.svg'

import kebutuhanTraining from './_kt'

const KebutuhanTraining = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formDiri = useSelector((state) => state.formDiri)
  const selectedRole = useSelector((state) => state.selectedRole)
  const jawabanSA1 = useSelector((state) => state.jawabanSA1)
  const jawabanSA2 = useSelector((state) => state.jawabanSA2)
  const jawabanDUJT = useSelector((state) => state.jawabanDUJT)
  const jawabanKT = useSelector((state) => state.jawabanKT)

  const [modal, setModal] = React.useState({
    add_training: false,
    submit: false,
  })
  const [newTraining, setNewTraining] = React.useState({
    role: '',
    nama_training: '',
    training: '',
    sertifikasi: '',
  })
  const [submitStatus, setSubmitStatus] = React.useState(0)

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
    setModal((state) => ({ ...state, add_training: false }))
  }

  const handleModal = (role) => {
    setNewTraining({ ...newTraining, role: role })
    setModal((state) => ({ ...state, add_training: !modal.add_training }))
  }

  const convert2XLSX = () => {
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new()

    /* create a worksheets for form diri, jawaban SA1, jawaban SA2, jawaban DUJT, and jawaban KT */
    var wsFormDiri = XLSX.utils.json_to_sheet([formDiri])
    var wsSA1 = XLSX.utils.json_to_sheet(jawabanSA1)
    var wsSA2 = XLSX.utils.json_to_sheet(jawabanSA2)
    var wsDUJT = XLSX.utils.json_to_sheet(jawabanDUJT)
    var wsKT = XLSX.utils.json_to_sheet(jawabanKT)

    /* Add the worksheets to the workbook */
    XLSX.utils.book_append_sheet(wb, wsFormDiri, 'Form Diri')
    XLSX.utils.book_append_sheet(wb, wsSA1, 'Self Assessment 1')
    XLSX.utils.book_append_sheet(wb, wsSA2, 'Self Assessment 2')
    XLSX.utils.book_append_sheet(wb, wsDUJT, 'DUJ & Tools')
    XLSX.utils.book_append_sheet(wb, wsKT, 'Kebutuhan Training')

    const today = new Date()
    const exportedFilename = formDiri
      ? `self-assessment-result-${formDiri.nama_pekerja}-${today.toISOString()}.xlsx`
      : 'self-assessment-result.xlsx'
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], { type: fileType })

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilename)
    } else {
      let link = document.createElement('a')
      if (link.download !== undefined) {
        let url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', exportedFilename)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  const handleSubmit = () => {
    convert2XLSX()
    setSubmitStatus(1)
    localStorage.clear()
    dispatch({
      type: 'set',
      formDiri: {
        nama_pekerja: '',
        no_pn: '',
        status: '',
        department: '',
        fungsi: '',
        email: '',
        corporate_title: '',
      },
      selectedRole: {
        utama: undefined,
        tambahan: undefined,
        minat: undefined,
      },
      selectedSkillList: [],
      selectedSkill: [],
      activeKey: 1,
      jawabanSA1: [],
      jawabanSA2: [],
      jawabanDUJT: [],
      jawabanKT: [],
      keywordInfoSkill: '',
    })
  }

  React.useEffect(() => {
    setSubmitStatus(0)

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
      <CModal
        visible={modal.add_training}
        onClose={() => setModal((state) => ({ ...state, add_training: false }))}
        backdrop={'static'}
      >
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
              onKeyPress={(e) => {
                if (e.key == 'Enter') {
                  e.preventDefault()
                }
              }}
            />
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton className="custom-btn-next text-white" color="info" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal
        alignment="center"
        visible={modal.submit}
        onClose={() => setModal((state) => ({ ...state, submit: false }))}
        backdrop={'static'}
      >
        {submitStatus === 0 && (
          <CModalBody>
            <CCard className="border-0">
              <CCardBody className="d-flex flex-column justify-content-center align-items-center">
                <img className="d-block w-50 mb-3" src={ImgWarning} alt="Image Warning" />
                <p className="text-center m-0 mt-3">
                  <b>Apakah anda sudah yakin untuk melakukan submit assessment?</b>
                </p>
              </CCardBody>

              <CCardFooter
                className="d-flex justify-content-center align-items-center border-0"
                style={{ backgroundColor: 'inherit' }}
              >
                <CRow className="mx-0 w-100 justify-content-center">
                  <CCol md={6} className="d-grid mb-2">
                    <CButton
                      color="light"
                      size="lg"
                      onClick={() => setModal((state) => ({ ...state, submit: false }))}
                      className="custom-btn-back"
                    >
                      Kembali
                    </CButton>
                  </CCol>

                  <CCol md={6} className="d-grid mb-2">
                    <CButton
                      color="info"
                      size="lg"
                      onClick={handleSubmit}
                      className="custom-btn-next text-white"
                    >
                      Submit
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CModalBody>
        )}

        {submitStatus === 1 && (
          <CModalBody>
            <CCard className="border-0">
              <CCardBody className="d-flex flex-column justify-content-center align-items-center">
                <img className="d-block w-50 mb-3" src={ImgCheck} alt="Check" />
                <p className="text-center m-0 mt-3">
                  <b>Pengisian assessment berhasil</b>
                </p>
              </CCardBody>

              <CCardFooter
                className="d-flex justify-content-center align-items-center border-0"
                style={{ backgroundColor: 'inherit' }}
              >
                <CRow className="mx-0 w-100 justify-content-center">
                  <CCol md={12} className="d-grid mb-2">
                    <CButton
                      color="info"
                      size="lg"
                      onClick={() => navigate('/self-assessment/data-diri')}
                      className="custom-btn-next text-white"
                    >
                      OK
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CModalBody>
        )}
      </CModal>

      <CCard className="mb-4 border-0">
        <CCardBody className="p-0 overflow-auto">
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  scope="col"
                  style={{
                    width: '15%',
                    borderTopLeftRadius: 'var(--cui-border-radius)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Role
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  scope="col"
                  style={{ width: '35%', whiteSpace: 'nowrap' }}
                >
                  Nama Training
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  scope="col"
                  style={{ width: '25%', whiteSpace: 'nowrap' }}
                >
                  Apakah Training Diperlukan?
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  scope="col"
                  style={{
                    width: '25%',
                    borderTopRightRadius: 'var(--cui-border-radius)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Apakah Perlu Sertifikasi?
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {jawabanKT &&
                [...new Set(jawabanKT.map((element) => element.role))].map((item_1, i) => (
                  <React.Fragment key={`soal_kt_${i}`}>
                    {jawabanKT &&
                      jawabanKT
                        .filter((element) => element.role === item_1)
                        .map((item_2, idx) => (
                          <CTableRow key={`soal_kt_item_${idx}`}>
                            <CTableDataCell style={{ width: '15%' }}>
                              <b>{idx === 0 ? item_1 : ''}</b>
                            </CTableDataCell>

                            <CTableDataCell style={{ width: `${35}%` }}>
                              {item_2.nama_training}
                            </CTableDataCell>

                            <CTableDataCell style={{ width: `${25}%` }}>
                              <CRow className="mx-0 w-100 justify-content-start">
                                <CCol md={4} className="d-inline mb-2">
                                  <span className="mx-2">Y</span>
                                  <CFormCheck
                                    style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                                    inline
                                    type="radio"
                                    name={`${item_2.nama_training}_training`}
                                    id={item_1}
                                    value="ya"
                                    defaultChecked={item_2.training === 'ya'}
                                    onClick={(e) => handleRow(e, 'training')}
                                  />
                                </CCol>

                                <CCol md={4} className="d-inline mb-2">
                                  <span className="mx-2">T</span>
                                  <CFormCheck
                                    style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                                    inline
                                    type="radio"
                                    name={`${item_2.nama_training}_training`}
                                    id={item_1}
                                    value="tidak"
                                    defaultChecked={item_2.training === 'tidak'}
                                    onClick={(e) => handleRow(e, 'training')}
                                  />
                                </CCol>
                              </CRow>
                            </CTableDataCell>

                            <CTableDataCell style={{ width: `${25}%` }}>
                              <CRow className="mx-0 w-100 justify-content-start">
                                <CCol md={4} className="d-inline mb-2">
                                  <span className="mx-2">Y</span>
                                  <CFormCheck
                                    style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                                    inline
                                    type="radio"
                                    name={`${item_2.nama_training}_sertifikasi`}
                                    id={item_1}
                                    value="ya"
                                    defaultChecked={item_2.sertifikasi === 'ya'}
                                    onClick={(e) => handleRow(e, 'sertifikasi')}
                                  />
                                </CCol>

                                <CCol md={4} className="d-inline mb-2">
                                  <span className="mx-2">T</span>
                                  <CFormCheck
                                    style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                                    inline
                                    type="radio"
                                    name={`${item_2.nama_training}_sertifikasi`}
                                    id={item_1}
                                    value="tidak"
                                    defaultChecked={item_2.sertifikasi === 'tidak'}
                                    onClick={(e) => handleRow(e, 'sertifikasi')}
                                  />
                                </CCol>
                              </CRow>
                            </CTableDataCell>
                          </CTableRow>
                        ))}

                    <CTableRow>
                      <CTableDataCell colSpan="3">
                        <CButton
                          color="info"
                          size="lg"
                          onClick={() => handleModal(item_1)}
                          className="p-0 m-2"
                        >
                          <CCard>
                            <CCardBody className="text-info d-flex align-items-center">
                              <CIcon
                                className="me-2"
                                icon={cilXCircle}
                                size="xxl"
                                style={{ transform: 'rotate(45deg)' }}
                              />
                              Tambah Training Lainnya
                            </CCardBody>
                          </CCard>
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  </React.Fragment>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>

        <CCardFooter
          className="d-flex justify-content-end align-items-center"
          style={{ backgroundColor: 'inherit' }}
        >
          <CRow className="mx-0 w-100 justify-content-end">
            <CCol md={3} className="d-grid mb-2">
              <CButton
                color="light"
                size="lg"
                onClick={() => navigate('/self-assessment-soal/duj-tools')}
                className="custom-btn-back"
              >
                Kembali
              </CButton>
            </CCol>

            <CCol md={3} className="d-grid mb-2">
              <CButton
                color="info"
                size="lg"
                onClick={() => setModal((state) => ({ ...state, submit: !modal.submit }))}
                className="custom-btn-next text-white"
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
