import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CFormCheck,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
  CRow,
  CCol,
  CFormTextarea,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { iconInfo } from 'src/assets/icons'

import soalAssessment2 from './_sa2'

const SelfAssessment2 = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedSkill = useSelector((state) => state.selectedSkill)
  const jawabanSA2 = useSelector((state) => state.jawabanSA2)
  const listSoal = soalAssessment2.filter((element) => selectedSkill.includes(element.skill))

  const handleRow = (e, type) => {
    const id = e.target.id
    const name = e.target.name
    const value = e.target.value
    const newJawaban = jawabanSA2.map((element) => {
      if (element.skill === id && element.pertanyaan === name) {
        element[type] = value
      }

      return element
    })

    dispatch({ type: 'set', jawabanSA2: newJawaban })
  }

  React.useEffect(() => {
    if (selectedSkill?.length === 0) {
      navigate('/self-assessment/data-diri')
    } else if (jawabanSA2?.length === 0) {
      const newListJawaban = listSoal.map((element) => {
        element.jawaban = null
        element.penjelasan = ''

        return element
      })

      dispatch({ type: 'set', jawabanSA2: newListJawaban })
    }
  }, [])
  return (
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
                style={{ width: '80%', borderTopRightRadius: 'var(--cui-border-radius)' }}
                scope="col"
              >
                Pertanyaan
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {jawabanSA2 &&
              [...new Set(jawabanSA2.map((element) => element.skill))].map((item_1, i) => (
                <CTableRow key={`soal_sa2_${i}`}>
                  <CTableDataCell style={{ width: '20%' }}>
                    <b>{item_1}</b>
                  </CTableDataCell>

                  <CTableDataCell style={{ width: '80%', padding: 0 }}>
                    <p className="p-2">
                      {(jawabanSA2 &&
                        jawabanSA2.find((element) => element.skill === item_1)?.pertanyaan_utama) ||
                        ''}
                    </p>

                    <CTable>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell
                            className="bg-light"
                            style={{
                              width: '40%',
                              borderTopLeftRadius: 'var(--cui-border-radius)',
                            }}
                            scope="col"
                          >
                            Pekerjaan
                          </CTableHeaderCell>

                          <CTableHeaderCell
                            className="bg-light"
                            style={{ width: '5%' }}
                            scope="col"
                          >
                            1
                          </CTableHeaderCell>

                          <CTableHeaderCell
                            className="bg-light"
                            style={{ width: '5%' }}
                            scope="col"
                          >
                            2
                          </CTableHeaderCell>

                          <CTableHeaderCell
                            className="bg-light"
                            style={{ width: '5%' }}
                            scope="col"
                          >
                            3
                          </CTableHeaderCell>

                          <CTableHeaderCell
                            className="bg-light"
                            style={{ width: '5%' }}
                            scope="col"
                          >
                            4
                          </CTableHeaderCell>

                          <CTableHeaderCell
                            className="bg-light"
                            style={{
                              width: '40%',
                              borderTopRightRadius: 'var(--cui-border-radius)',
                            }}
                            scope="col"
                          >
                            Penjelasan
                            <CTooltip
                              content="Mohon berikan penjelasan dengan menuliskan pekerjaan-pekerjaan yang dilakukan terkait kemampuan dan pengalaman ini"
                              placement="bottom"
                            >
                              <CIcon icon={iconInfo} size="sm" style={{ marginLeft: '.25rem' }} />
                            </CTooltip>
                          </CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>

                      <CTableBody>
                        {jawabanSA2 &&
                          jawabanSA2
                            .filter((element) => element.skill === item_1)
                            .map((item_2, idx) => (
                              <CTableRow key={`soal_sa2_item_${idx}`}>
                                <CTableDataCell style={{ width: '40%' }}>
                                  <ul>
                                    {item_2.pertanyaan &&
                                      item_2.pertanyaan
                                        .split('\n')
                                        .map((item_3, i_3) => (
                                          <li key={`pertanyaan_sa2_${i_3}`}>{item_3}</li>
                                        ))}
                                  </ul>
                                </CTableDataCell>

                                <CTableDataCell className="align-middle" style={{ width: '5%' }}>
                                  <CFormCheck
                                    style={{ width: '1.5em', height: '1.5em' }}
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={1}
                                    defaultChecked={item_2.jawaban == 1}
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell className="align-middle" style={{ width: '5%' }}>
                                  <CFormCheck
                                    style={{ width: '1.5em', height: '1.5em' }}
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={2}
                                    defaultChecked={item_2.jawaban == 2}
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell className="align-middle" style={{ width: '5%' }}>
                                  <CFormCheck
                                    style={{ width: '1.5em', height: '1.5em' }}
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={3}
                                    defaultChecked={item_2.jawaban == 3}
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell className="align-middle" style={{ width: '5%' }}>
                                  <CFormCheck
                                    style={{ width: '1.5em', height: '1.5em' }}
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={4}
                                    defaultChecked={item_2.jawaban == 4}
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell className="align-middle" style={{ width: '40%' }}>
                                  <CFormTextarea
                                    rows={3}
                                    id={item_1}
                                    name={item_2.pertanyaan}
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
        <CRow className="mx-0 w-100 justify-content-end">
          <CCol md={3} className="d-grid mb-2">
            <CButton
              color="light"
              size="lg"
              onClick={() => navigate('/self-assessment-soal/self-assessment-1')}
              className="custom-btn-back"
            >
              Kembali
            </CButton>
          </CCol>

          <CCol md={3} className="d-grid mb-2">
            <CButton
              color="info"
              size="lg"
              onClick={() => navigate('/self-assessment-soal/duj-tools')}
              className="custom-btn-next text-white"
            >
              Selanjutnya
            </CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  )
}

export default SelfAssessment2
