import React from 'react'
import { CRow, CCol, CButton } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

const PilihSkill = () => {
  const selectedSkillList = useSelector((state) => state.selectedSkillList)
  const selectedSkill = useSelector((state) => state.selectedSkill)
  const dispatch = useDispatch()
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
    dispatch({ type: 'set', selectedSkillList: [], selectedSkill: [] })
  }

  return (
    <>
      {console.log(selectedSkill)}
      <h2>Pilih Skill Anda</h2>

      <p> Pilih skill yang anda kuasai (minimal basic knowledge)</p>

      <div className="mb-3">
        {skillList &&
          skillList.map((item, i) => (
            <CButton
              color="info"
              key={`skill_list_${i}`}
              className="m-2"
              onClick={() => handleSkill(item)}
            >
              {item}
            </CButton>
          ))}
      </div>

      <CRow className="mb-3">
        <CCol md={4} className="d-grid mb-2">
          <CButton color="secondary" size="lg" onClick={handleBack}>
            Kembali
          </CButton>
        </CCol>

        <CCol md={8} className="d-grid mb-2">
          <CButton color="primary" size="lg">
            Submit & Lanjut ke Pengisian Assessment
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default PilihSkill
