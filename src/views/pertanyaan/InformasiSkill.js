import React from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useSelector } from 'react-redux'

import informasiSkill from './_iskill'

const InformasiSkill = () => {
  const keywordInfoSkill = useSelector((state) => state.keywordInfoSkill)

  const [iSkill, setISkill] = React.useState(informasiSkill)

  React.useEffect(() => {
    const filteredSkill = informasiSkill.filter((skill) =>
      skill?.skill?.toLowerCase()?.includes(keywordInfoSkill.toLowerCase()),
    )

    setISkill(filteredSkill)
  }, [keywordInfoSkill])
  return (
    <CCard className="mb-4 border-0">
      <CCardBody className="p-0">
        <CTable>
          <CTableHead className="align-middle">
            <CTableRow>
              <CTableHeaderCell
                className="custom-btn-next text-white"
                style={{
                  width: '10%',
                  borderTopLeftRadius: 'var(--cui-border-radius)',
                  whiteSpace: 'nowrap',
                }}
                scope="col"
              >
                No
              </CTableHeaderCell>

              <CTableHeaderCell
                className="custom-btn-next text-white"
                style={{ width: '30%', whiteSpace: 'nowrap' }}
                scope="col"
              >
                Skill
              </CTableHeaderCell>

              <CTableHeaderCell
                className="custom-btn-next text-white"
                style={{
                  width: '60%',
                  borderTopRightRadius: 'var(--cui-border-radius)',
                  whiteSpace: 'nowrap',
                }}
                scope="col"
              >
                Deskripsi
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {iSkill &&
              iSkill.map((element, i) => (
                <CTableRow key={`info_skill_list${i}`}>
                  <CTableDataCell style={{ width: '10%' }}>{element.no}</CTableDataCell>

                  <CTableDataCell style={{ width: '30%' }}>{element.skill}</CTableDataCell>

                  <CTableDataCell style={{ width: '60%' }}>{element.deskripsi}</CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default InformasiSkill
