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
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'

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
      {console.log(jawabanSA1)}
      <CCard className="mb-4 border-0">
        <CCardBody className="p-0">
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
                    <CIcon icon={cilInfo} size="sm" style={{ marginLeft: '.25rem' }} />
                  </CTooltip>
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {jawabanSA1 &&
                [...new Set(jawabanSA1.map((element) => element.skill))].map((item_1, i) => (
                  <CTableRow key={`soal_sa1_${i}`}>
                    <CTableDataCell style={{ width: '20%' }}>
                      <b>{item_1}</b>
                    </CTableDataCell>

                    <CTableDataCell className="px-0" style={{ width: '80%' }} colSpan="8">
                      <CTable className="m-0">
                        <CTableBody>
                          {jawabanSA1 &&
                            jawabanSA1
                              .filter((element) => element.skill === item_1)
                              .map((item_2, idx) => (
                                <CTableRow key={`soal_sa1_item_${idx}`}>
                                  <CTableDataCell style={{ paddingTop: 0, width: `${75 / 2}%` }}>
                                    {item_2.job_desk}
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={1}
                                      defaultChecked={item_2.jawaban == 1}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={2}
                                      defaultChecked={item_2.jawaban == 2}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={3}
                                      defaultChecked={item_2.jawaban == 3}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={4}
                                      defaultChecked={item_2.jawaban == 4}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={5}
                                      defaultChecked={item_2.jawaban == 5}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: `${25 / 4}%` }}>
                                    <CFormCheck
                                      type="radio"
                                      name={item_2.job_desk}
                                      id={item_1}
                                      value={6}
                                      defaultChecked={item_2.jawaban == 6}
                                      onClick={(e) => handleRow(e, 'jawaban')}
                                    />
                                  </CTableDataCell>

                                  <CTableDataCell style={{ paddingTop: 0, width: '25%' }}>
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
                        </CTableBody>
                      </CTable>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>

        <CCardFooter
          className="d-flex justify-content-end align-items-center"
          style={{ backgroundColor: 'inherit' }}
        >
          <CButton
            color="info"
            size="lg"
            onClick={() => navigate('/self-assessment-soal/self-assessment-2')}
            className="custom-btn-next text-white px-5"
          >
            Selanjutnya
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default SelfAssessment1
