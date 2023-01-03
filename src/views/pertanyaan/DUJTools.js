import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CRow,
  CCol,
  CButton,
  CFormCheck,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
  CFormTextarea,
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
import CIcon from '@coreui/icons-react'
import { cilXCircle } from '@coreui/icons'
import { iconInfo } from 'src/assets/icons'

import departemen from './../self-assessment/_duj'

const DUJTools = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formDiri = useSelector((state) => state.formDiri)
  const jawabanDUJT = useSelector((state) => state.jawabanDUJT)
  const listSoal = departemen.filter(
    (element) => element.departemen === formDiri.department && element.fungsi === formDiri.fungsi,
  )

  const [modal, setModal] = React.useState(false)
  const [newPekerjaan, setNewPekerjaan] = React.useState({
    departemen: '',
    fungsi: '',
    pekerjaan: '',
    detail_pekerjaan: '',
    ya_tidak: '',
    ada_kesulitan: '',
    tools: '',
  })

  const handleRow = (e, type) => {
    const id = e.target.id
    const name = e.target.name
    const value = e.target.value
    const newJawaban = jawabanDUJT.map((element, i) => {
      if (i === Number(id.split('_')[0]) && i === Number(name.split('_')[0])) {
        element[type] = value
      }

      return element
    })

    dispatch({ type: 'set', jawabanDUJT: newJawaban })
  }

  const handleAdd = () => {
    dispatch({ type: 'set', jawabanDUJT: jawabanDUJT.concat(newPekerjaan) })
    setNewPekerjaan({ ...newPekerjaan, detail_pekerjaan: '', pekerjaan: '' })
    setModal(false)
  }

  React.useEffect(() => {
    setNewPekerjaan({
      ...newPekerjaan,
      departemen: formDiri?.department || '',
      fungsi: formDiri?.fungsi || '',
    })

    if (Object.values(formDiri).includes('')) {
      navigate('/self-assessment/data-diri')
    } else if (jawabanDUJT?.length === 0) {
      dispatch({ type: 'set', jawabanDUJT: listSoal })
    }
  }, [])

  return (
    <>
      <CModal visible={modal} onClose={() => setModal(false)} backdrop={'static'}>
        <CModalHeader>
          <CModalTitle>Tambah Pekerjaan Lainnya</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CForm>
            <CFormLabel>Pekerjaan</CFormLabel>

            <CFormInput
              type="text"
              name="new_pekerjaan"
              id="new_pekerjaan"
              value={newPekerjaan.detail_pekerjaan}
              onChange={(e) =>
                setNewPekerjaan({
                  ...newPekerjaan,
                  detail_pekerjaan: e.target.value,
                  pekerjaan: e.target.value,
                })
              }
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

      <CCard className="mb-4 border-0">
        <CCardBody className="p-0 overflow-auto">
          <CTable>
            <CTableHead className="align-middle">
              <CTableRow>
                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{
                    width: '30%',
                    borderTopLeftRadius: 'var(--cui-border-radius)',
                    whiteSpace: 'nowrap',
                  }}
                  scope="col"
                >
                  Pekerjaan
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '20%', whiteSpace: 'nowrap' }}
                  scope="col"
                >
                  Ya atau Tidak
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '20%', whiteSpace: 'nowrap' }}
                  scope="col"
                >
                  Ada Kesulitan?
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{
                    width: '30%',
                    borderTopRightRadius: 'var(--cui-border-radius)',
                    whiteSpace: 'nowrap',
                  }}
                  scope="col"
                >
                  Tools/Bahasa Pemrograman yang digunakan
                  <CTooltip
                    content="Tool/Bahasa Pemrograman yang digunakan sekaligus level pengguanaan Anda (Basic, Intermediate, Advance) [Cara penulisan: Jira_basic, Kibana_inter, Golang_adv]"
                    placement="bottom"
                  >
                    <CIcon icon={iconInfo} size="sm" style={{ marginLeft: '.25rem' }} />
                  </CTooltip>
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {jawabanDUJT &&
                jawabanDUJT.map((element, i) => (
                  <CTableRow key={`duj_list_${i}`}>
                    <CTableDataCell style={{ width: '30%' }}>
                      {element.detail_pekerjaan}
                    </CTableDataCell>

                    <CTableDataCell style={{ width: '20%' }}>
                      <CRow className="mx-0 w-100 justify-content-start">
                        <CCol md={4} className="d-inline mb-2">
                          <span className="mx-2">Y</span>
                          <CFormCheck
                            style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                            inline
                            type="radio"
                            name={`${i}_ya_tidak`}
                            id={`${i}_ya_tidak`}
                            value="ya"
                            defaultChecked={element?.ya_tidak === 'ya'}
                            onClick={(e) => handleRow(e, 'ya_tidak')}
                          />
                        </CCol>

                        <CCol md={4} className="d-inline mb-2">
                          <span className="mx-2">T</span>
                          <CFormCheck
                            style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                            inline
                            type="radio"
                            name={`${i}_ya_tidak`}
                            id={`${i}_ya_tidak`}
                            value="tidak"
                            defaultChecked={element?.ya_tidak === 'tidak'}
                            onClick={(e) => handleRow(e, 'ya_tidak')}
                          />
                        </CCol>
                      </CRow>
                    </CTableDataCell>

                    <CTableDataCell style={{ width: '20%' }}>
                      <CRow className="mx-0 w-100 justify-content-start">
                        <CCol md={4} className="d-inline mb-2">
                          <span className="mx-2">Y</span>
                          <CFormCheck
                            style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                            inline
                            type="radio"
                            name={`${i}_kesulitan`}
                            id={`${i}_kesulitan`}
                            value="ya"
                            defaultChecked={element?.ada_kesulitan === 'ya'}
                            onClick={(e) => handleRow(e, 'ada_kesulitan')}
                          />
                        </CCol>

                        <CCol md={4} className="d-inline mb-2">
                          <span className="mx-2">T</span>
                          <CFormCheck
                            style={{ margin: 0, width: '1.5em', height: '1.5em' }}
                            inline
                            type="radio"
                            name={`${i}_kesulitan`}
                            id={`${i}_kesulitan`}
                            value="tidak"
                            defaultChecked={element?.ada_kesulitan === 'tidak'}
                            onClick={(e) => handleRow(e, 'ada_kesulitan')}
                          />
                        </CCol>
                      </CRow>
                    </CTableDataCell>

                    <CTableDataCell style={{ width: '30%' }}>
                      <CFormTextarea
                        rows={3}
                        id={`${i}_tools`}
                        name={`${i}_tools`}
                        value={element?.tools || ''}
                        onChange={(e) => handleRow(e, 'tools')}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}

              <CTableRow>
                <CTableDataCell colSpan="4">
                  <CButton
                    color="info"
                    size="lg"
                    onClick={() => setModal(!modal)}
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
                        Tambah Pekerjaan Lainnya
                      </CCardBody>
                    </CCard>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
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
                onClick={() => navigate('/self-assessment-soal/self-assessment-2')}
                className="custom-btn-back"
              >
                Kembali
              </CButton>
            </CCol>

            <CCol md={3} className="d-grid mb-2">
              <CButton
                color="info"
                size="lg"
                onClick={() => navigate('/self-assessment-soal/kebutuhan-training')}
                className="custom-btn-next text-white"
              >
                Selanjutnya
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default DUJTools
