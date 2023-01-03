import React from 'react'
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CButton,
  CTabContent,
  CTabPane,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import skill from './_skill'

const PilihRole = () => {
  const navigate = useNavigate()
  const formDiri = useSelector((state) => state.formDiri)
  const selectedRole = useSelector((state) => state.selectedRole)
  const activeKey = useSelector((state) => state.activeKey)
  const dispatch = useDispatch()

  const tabItem = (roleType) => {
    return (
      <>
        {skill &&
          [...new Set(skill.map((element) => element.category))].map((item_1, i) => (
            <React.Fragment key={`cat_list_${i}`}>
              <h5>{item_1}</h5>

              <CRow className="mb-3">
                {skill &&
                  [
                    ...new Set(
                      skill
                        .filter((element) => element.category === item_1)
                        .map((element) => element.role),
                    ),
                  ].map((item_2, idx) => (
                    <CCol key={`role_list_${idx}`} md={3} className="mb-2">
                      <CButton
                        color={selectedRole[roleType]?.role === item_2 ? 'info' : 'muted'}
                        size="lg"
                        className="d-grid p-0"
                        style={{ width: '100%', height: '100%' }}
                        onClick={() => handleRole(roleType, item_1, item_2)}
                      >
                        <CCard>
                          <CCardBody
                            className={`${
                              selectedRole[roleType]?.role === item_2 ? 'text-info' : 'text-dark'
                            }`}
                          >
                            {item_2}
                          </CCardBody>
                        </CCard>
                      </CButton>
                    </CCol>
                  ))}
              </CRow>
            </React.Fragment>
          ))}
      </>
    )
  }

  const handleRole = (roleType, category, role) => {
    if (selectedRole[roleType]?.category === category && selectedRole[roleType]?.role === role) {
      dispatch({
        type: 'set',
        selectedRole: {
          ...selectedRole,
          [roleType]: undefined,
        },
      })
    } else {
      dispatch({
        type: 'set',
        selectedRole: {
          ...selectedRole,
          [roleType]: { category: category, role: role },
        },
      })
    }
  }

  const handleBack = () => {
    dispatch({ type: 'set', selectedSkillList: [] })

    if (activeKey === 1) {
      navigate('/self-assessment/data-diri')
    } else {
      dispatch({ type: 'set', activeKey: activeKey - 1 })
    }
  }

  const handleNext = () => {
    if (activeKey === 3) {
      const roleTypeList = Object.keys(selectedRole)
      const selectedSkill = []
      roleTypeList &&
        roleTypeList.forEach((roleType) => {
          const skillList = skill
            .filter(
              (element) =>
                element.category === selectedRole[roleType]?.category &&
                element.role === selectedRole[roleType]?.role,
            )
            .map((element) => element?.skill)
          selectedSkill.push(...skillList)
        })

      dispatch({ type: 'set', selectedSkillList: selectedSkill, selectedSkill: [], jawabanKT: [] })
      navigate('/self-assessment/pilih-skill')
    } else {
      dispatch({ type: 'set', activeKey: activeKey + 1 })
    }
  }

  React.useEffect(() => {
    if (Object.values(formDiri).includes('')) {
      navigate('/self-assessment/data-diri')
    }
  }, [])

  return (
    <>
      <CNav varant="tabs" role="tablist" className="custom-tab border-bottom">
        <CNavItem>
          <CNavLink className={`${activeKey === 1 && 'tab-active'}`} active={activeKey === 1}>
            1. Role Utama
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink className={`${activeKey === 2 && 'tab-active'}`} active={activeKey === 2}>
            2. Role Tambahan
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink className={`${activeKey === 3 && 'tab-active'}`} active={activeKey === 3}>
            3. Role Minat
          </CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane
          className="my-4"
          role="tabpanel"
          aria-labelledby="role-utama"
          visible={activeKey === 1}
        >
          {tabItem('utama')}
        </CTabPane>

        <CTabPane
          className="my-4"
          role="tabpanel"
          aria-labelledby="role-tambahan"
          visible={activeKey === 2}
        >
          {tabItem('tambahan')}
        </CTabPane>

        <CTabPane
          className="my-4"
          role="tabpanel"
          aria-labelledby="role-minat"
          visible={activeKey === 3}
        >
          {tabItem('minat')}
        </CTabPane>
      </CTabContent>

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
            onClick={handleNext}
            disabled={activeKey === 1 && !selectedRole.utama}
            className="custom-btn-next text-white"
          >
            Selanjutnya
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default PilihRole
