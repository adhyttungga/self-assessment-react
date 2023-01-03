import React from 'react'
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CFormCheck,
  CCard,
  CCardBody,
  CCardFooter,
  CTooltip,
  CFormTextarea,
  CRow,
  CCol,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { iconInfo } from 'src/assets/icons'

import soalAssessment1 from './_sa1'

const SelfAssessment1 = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedSkill = useSelector((state) => state.selectedSkill)
  const jawabanSA1 = useSelector((state) => state.jawabanSA1)
  const listSoal = soalAssessment1.filter((element) => selectedSkill.includes(element.skill))

  const handleRow = (e, type) => {
    const id = e.target.id
    const name = e.target.name
    const value = e.target.value
    const newJawaban = jawabanSA1.map((element) => {
      if (element.skill === id && element.job_desk === name) {
        element[type] = value
      }

      return element
    })

    dispatch({ type: 'set', jawabanSA1: newJawaban })
  }

  React.useEffect(() => {
    if (selectedSkill?.length === 0) {
      navigate('/self-assessment/data-diri')
    } else if (jawabanSA1?.length === 0) {
      const newListJawaban = listSoal.map((element) => {
        element.jawaban = null
        element.penjelasan = ''

        return element
      })

      dispatch({ type: 'set', jawabanSA1: newListJawaban })
    }
  }, [])

  return (
    <>
      <CCard className="mb-4 border-0">
        <CCardBody className="p-0 overflow-auto">
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '20%', borderTopLeftRadius: 'var(--cui-border-radius)' }}
                  scope="col"
                >
                  Skill
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '30%' }}
                  scope="col"
                >
                  Job Desk
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  1
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  2
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  3
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  4
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  5
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{ width: '5%' }}
                  scope="col"
                >
                  6
                </CTableHeaderCell>

                <CTableHeaderCell
                  className="custom-btn-next text-white"
                  style={{
                    width: '20%',
                    borderTopRightRadius: 'var(--cui-border-radius)',
                  }}
                  scope="col"
                >
                  Penjelasan
                  <CTooltip
                    content="Mohon berikan penjelasan dengan menuliskan pekerjaan-pekerjaan yang dilakukan terkait skill ini"
                    placement="bottom"
                  >
                    <CIcon icon={iconInfo} size="sm" style={{ marginLeft: '.25rem' }} />
                  </CTooltip>
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {jawabanSA1 &&
                [...new Set(jawabanSA1.map((element) => element.skill))].map((item_1, i) => (
                  <React.Fragment key={`soal_sa1_${i}`}>
                    {jawabanSA1 &&
                      jawabanSA1
                        .filter((element) => element.skill === item_1)
                        .map((item_2, idx) => (
                          <CTableRow key={`soal_sa1_item_${idx}`}>
                            <CTableDataCell style={{ width: '20%' }}>
                              <b>{idx === 0 ? item_1 : ''}</b>
                            </CTableDataCell>

                            <CTableDataCell style={{ width: `${30}%` }}>
                              {item_2.job_desk}
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={1}
                                defaultChecked={item_2.jawaban == 1}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={2}
                                defaultChecked={item_2.jawaban == 2}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={3}
                                defaultChecked={item_2.jawaban == 3}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={4}
                                defaultChecked={item_2.jawaban == 4}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={5}
                                defaultChecked={item_2.jawaban == 5}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: `5%` }}>
                              <CFormCheck
                                style={{ width: '1.5em', height: '1.5em' }}
                                type="radio"
                                name={item_2.job_desk}
                                id={item_1}
                                value={6}
                                defaultChecked={item_2.jawaban == 6}
                                onClick={(e) => handleRow(e, 'jawaban')}
                              />
                            </CTableDataCell>

                            <CTableDataCell className="align-middle" style={{ width: '20%' }}>
                              <CFormTextarea
                                rows={3}
                                id={item_1}
                                name={item_2.job_desk}
                                value={item_2.penjelasan || ''}
                                onChange={(e) => handleRow(e, 'penjelasan')}
                              />
                            </CTableDataCell>
                          </CTableRow>
                        ))}
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
                color="info"
                size="lg"
                onClick={() => navigate('/self-assessment-soal/self-assessment-2')}
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

export default SelfAssessment1
