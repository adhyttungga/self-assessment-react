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
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'

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
      <CCardBody className="p-0">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell style={{ width: '20%' }} scope="col">
                Skill
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '80%' }} scope="col">
                Pertanyaan
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {jawabanSA2 &&
              [...new Set(jawabanSA2.map((element) => element.skill))].map((item_1, i) => (
                <CTableRow key={`soal_sa2_${i}`}>
                  <CTableDataCell style={{ width: '20%' }}>{item_1}</CTableDataCell>

                  <CTableDataCell style={{ width: '80%', padding: 0 }}>
                    <p className="p-2">
                      {(jawabanSA2 &&
                        jawabanSA2.find((element) => element.skill === item_1)?.pertanyaan_utama) ||
                        ''}
                    </p>

                    <CTable>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell style={{ width: '40%' }} scope="col">
                            Pekerjaan
                          </CTableHeaderCell>

                          <CTableHeaderCell style={{ width: '5%' }} scope="col">
                            1
                          </CTableHeaderCell>

                          <CTableHeaderCell style={{ width: '5%' }} scope="col">
                            2
                          </CTableHeaderCell>

                          <CTableHeaderCell style={{ width: '5%' }} scope="col">
                            3
                          </CTableHeaderCell>

                          <CTableHeaderCell style={{ width: '5%' }} scope="col">
                            4
                          </CTableHeaderCell>

                          <CTableHeaderCell style={{ width: '40%' }} scope="col">
                            Penjelasan
                            <CTooltip
                              content="Mohon berikan penjelasan dengan menuliskan pekerjaan-pekerjaan yang dilakukan terkait kemampuan dan pengalaman ini"
                              placement="bottom"
                            >
                              <CIcon icon={cilInfo} size="sm" style={{ marginLeft: '.25rem' }} />
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
                                  <p style={{ whiteSpace: 'pre-wrap' }}>
                                    {'- ' + item_2.pertanyaan.replaceAll(/[\n]/g, '\n- ')}
                                  </p>
                                </CTableDataCell>

                                <CTableDataCell style={{ width: '5%' }}>
                                  <CFormCheck
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={1}
                                    defaultChecked={
                                      jawabanSA2.find(
                                        (element) =>
                                          element.skill === item_1 &&
                                          element.pertanyaan === item_2.pertanyaan,
                                      )?.jawaban == 1
                                    }
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell style={{ width: '5%' }}>
                                  <CFormCheck
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={2}
                                    defaultChecked={
                                      jawabanSA2.find(
                                        (element) =>
                                          element.skill === item_1 &&
                                          element.pertanyaan === item_2.pertanyaan,
                                      )?.jawaban == 2
                                    }
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell style={{ width: '5%' }}>
                                  <CFormCheck
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={3}
                                    defaultChecked={
                                      jawabanSA2.find(
                                        (element) =>
                                          element.skill === item_1 &&
                                          element.pertanyaan === item_2.pertanyaan,
                                      )?.jawaban == 3
                                    }
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell style={{ width: '5%' }}>
                                  <CFormCheck
                                    type="radio"
                                    name={item_2.pertanyaan}
                                    id={item_1}
                                    value={4}
                                    defaultChecked={
                                      jawabanSA2.find(
                                        (element) =>
                                          element.skill === item_1 &&
                                          element.pertanyaan === item_2.pertanyaan,
                                      )?.jawaban == 4
                                    }
                                    onClick={(e) => handleRow(e, 'jawaban')}
                                  />
                                </CTableDataCell>

                                <CTableDataCell style={{ width: '40%' }}>
                                  <CFormTextarea
                                    rows={3}
                                    id={item_1}
                                    name={item_2.pertanyaan}
                                    value={
                                      jawabanSA2.find(
                                        (element) =>
                                          element.skill === item_1 &&
                                          element.pertanyaan === item_2.pertanyaan,
                                      )?.penjelasan || ''
                                    }
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

      <CCardFooter className="d-flex justify-content-end align-items-center">
        <CRow className="mx-0">
          <CCol className="d-grid">
            <CButton
              color="info"
              size="lg"
              onClick={() => navigate('/self-assessment-soal/self-assessment-1')}
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
              Selanjutnya
            </CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  )
}

export default SelfAssessment2
