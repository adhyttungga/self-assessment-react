import React from 'react'
import { CRow, CCol, CButton, CContainer, CCard, CCardBody } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PilihSkill = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formDiri = useSelector((state) => state.formDiri)
  const selectedSkillList = useSelector((state) => state.selectedSkillList)
  const selectedSkill = useSelector((state) => state.selectedSkill)
  const skillList = [...new Set(selectedSkillList.map((item) => item))]

  const handleSkill = (skill) => {
    let newSelectedSkill = []

    if (selectedSkill.includes(skill)) {
      newSelectedSkill = selectedSkill.filter((item) => item !== skill)
    } else {
      newSelectedSkill = selectedSkill.concat(skill)
    }

    dispatch({ type: 'set', selectedSkill: newSelectedSkill })
  }

  const handleBack = () => {
    dispatch({ type: 'set', selectedSkillList: [], selectedSkill: [], activeKey: 3 })
    navigate('/self-assessment/pilih-role')
  }

  const handleSubmit = () => {
    dispatch({ type: 'set', jawabanSA1: [] })
    navigate('/self-assessment-soal/self-assessment-1')
  }

  React.useEffect(() => {
    if (Object.values(formDiri).includes('')) {
      navigate('/self-assessment/data-diri')
    }
  }, [])

  return (
    <>
      <CContainer fluid className="mb-3 border-bottom p-0">
        <p>Pilih skill yang anda kuasai (minimal basic knowledge)</p>
      </CContainer>

      <div className="mb-3">
        {skillList &&
          skillList.map((item, i) => (
            <CButton
              color={selectedSkill.includes(item) ? 'info' : 'muted'}
              key={`skill_list_${i}`}
              className="p-0 m-2"
              onClick={() => handleSkill(item)}
            >
              <CCard>
                <CCardBody
                  className={`py-2 ${selectedSkill.includes(item) ? 'text-info' : 'text-dark'}`}
                >
                  {item}
                </CCardBody>
              </CCard>
            </CButton>
          ))}
      </div>

      <CRow className="mb-3">
        <CCol md={4} className="d-grid mb-2">
          <CButton color="light" size="lg" onClick={handleBack} className="custom-btn-back">
            Kembali
          </CButton>
        </CCol>

        <CCol md={8} className="d-grid mb-2">
          <CButton
            color="info"
            size="lg"
            onClick={handleSubmit}
            disabled={selectedSkill.length === 0}
            className="custom-btn-next text-white"
          >
            Submit & Lanjut ke Pengisian Assessment
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default PilihSkill
