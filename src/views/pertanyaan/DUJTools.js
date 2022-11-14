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
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

import { cilInfo } from '@coreui/icons'

import departemen from './../self-assessment/_duj'

const DUJTools = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formDiri = useSelector((state) => state.formDiri)
  const jawabanDUJT = useSelector((state) => state.jawabanDUJT)
  const listSoal = departemen.filter(
    (element) => element.departemen === formDiri.department && element.fungsi === formDiri.fungsi,
  )

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

  React.useEffect(() => {
    if (Object.values(formDiri).includes('')) {
      navigate('/self-assessment/data-diri')
    } else if (jawabanDUJT?.length === 0) {
      dispatch({ type: 'set', jawabanDUJT: listSoal })
    }
  }, [])

  return (
    <CCard className="mb-4 border-0">
      {console.log('listSoal: ', listSoal)}
      {console.log('jawaban: ', jawabanDUJT)}
      {console.log('form-diri: ', formDiri)}
      <CCardBody className="p-0">
        <CTable>
          <CTableHead className="align-middle">
            <CTableRow>
              <CTableHeaderCell style={{ width: '30%' }} scope="col">
                Pekerjaan
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '20%' }} scope="col">
                Ya atau Tidak
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '20%' }} scope="col">
                Ada Kesulitan?
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '30%' }} scope="col">
                Tools/Bahasa Pemrograman yang digunakan
                <CTooltip
                  content="Tool/Bahasa Pemrograman yang digunakan sekaligus level pengguanaan Anda (Basic, Intermediate, Advance) [Cara penulisan: Jira_basic, Kibana_inter, Golang_adv]"
                  placement="bottom"
                >
                  <CIcon icon={cilInfo} size="sm" style={{ marginLeft: '.25rem' }} />
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
                    <CFormCheck
                      inline
                      label="Y"
                      type="radio"
                      name={`${i}_ya_tidak`}
                      id={`${i}_ya_tidak`}
                      value="ya"
                      defaultChecked={element?.ya_tidak === 'ya'}
                      onClick={(e) => handleRow(e, 'ya_tidak')}
                    />

                    <CFormCheck
                      inline
                      label="T"
                      type="radio"
                      name={`${i}_ya_tidak`}
                      id={`${i}_ya_tidak`}
                      value="tidak"
                      defaultChecked={element?.ya_tidak === 'tidak'}
                      onClick={(e) => handleRow(e, 'ya_tidak')}
                    />
                  </CTableDataCell>

                  <CTableDataCell style={{ width: '20%' }}>
                    <CFormCheck
                      inline
                      label="Y"
                      type="radio"
                      name={`${i}_kesulitan`}
                      id={`${i}_kesulitan`}
                      value="ya"
                      defaultChecked={element?.ada_kesulitan === 'ya'}
                      onClick={(e) => handleRow(e, 'ada_kesulitan')}
                    />

                    <CFormCheck
                      inline
                      label="T"
                      type="radio"
                      name={`${i}_kesulitan`}
                      id={`${i}_kesulitan`}
                      value="tidak"
                      defaultChecked={element?.ada_kesulitan === 'tidak'}
                      onClick={(e) => handleRow(e, 'ada_kesulitan')}
                    />
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
                <CButton color="info" size="lg">
                  Tambah Pekerjaan Lainnya
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>

      <CCardFooter className="d-flex justify-content-end align-items-center">
        <CRow className="mx-0">
          <CCol className="d-grid">
            <CButton
              color="info"
              size="lg"
              onClick={() => navigate('/self-assessment-soal/self-assessment-2')}
            >
              Kembali
            </CButton>
          </CCol>

          <CCol className="d-grid">
            <CButton
              color="info"
              size="lg"
              onClick={() => navigate('/self-assessment-soal/kebutuhan-training')}
            >
              Selanjutnya
            </CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  )
}

export default DUJTools
