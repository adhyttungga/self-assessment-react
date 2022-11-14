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

import informasiSkill from './_iskill'

const InformasiSkill = () => {
  return (
    <CCard className="mb-4 border-0">
      <CCardBody className="p-0">
        <CTable>
          <CTableHead className="align-middle">
            <CTableRow>
              <CTableHeaderCell style={{ width: '10%' }} scope="col">
                No
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '30%' }} scope="col">
                Skill
              </CTableHeaderCell>

              <CTableHeaderCell style={{ width: '60%' }} scope="col">
                Deskripsi
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {informasiSkill &&
              informasiSkill.map((element, i) => (
                <CTableRow key={`duj_list_${i}`}>
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
