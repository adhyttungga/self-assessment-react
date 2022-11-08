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

import skill from './_skill'

const PilihRole = () => {
  const selectedRole = useSelector((state) => state.selectedRole)
  const selectedSkillList = useSelector((state) => state.selectedSkillList)
  const dispatch = useDispatch()

  const [activeKey, setActiveKey] = React.useState(1)

  const tabItem = (roleType) => {
    return (
      <>
        {skill &&
          skill.map((item, i) => (
            <React.Fragment key={`cat_list_${i}`}>
              <h3>{item.category}</h3>

              <CRow className="mb-3">
                {item?.items &&
                  item?.items.map((role, idx) => (
                    <CCol key={`role_list_${idx}`} md={3} className="mb-2">
                      <CButton
                        color="info"
                        size="lg"
                        className="d-grid p-0"
                        style={{ width: '100%', height: '100%' }}
                        onClick={() => handleRole(roleType, item.category, role.role)}
                      >
                        <CCard>
                          <CCardBody>{role.role}</CCardBody>
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

  const getRoleType = (value) => {
    switch (value) {
      case 1:
        return 'utama'
      case 2:
        return 'tambahan'
      case 3:
        return 'minat'
    }
  }

  const handleRole = (roleType, category, role) => {
    console.log(roleType)
    console.log(role)

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
    } else {
      setActiveKey(activeKey - 1)
    }
  }

  const handleNext = () => {
    if (activeKey === 3) {
      const roleTypeList = Object.keys(selectedRole)
      console.log(roleTypeList)
      roleTypeList &&
        roleTypeList.forEach((roleType) => {
          const skillGroup = skill.find(
            (item) => item.category === selectedRole[roleType]?.category,
          )
          const skillList = skillGroup?.items.find(
            (item) => item.role === selectedRole[roleType]?.role,
          )?.skill

          console.log(skillList)

          skillList &&
            dispatch({ type: 'set', selectedSkillList: selectedSkillList.concat(skillList) })
        })
    } else {
      setActiveKey(activeKey + 1)
    }
  }

  return (
    <>
      {console.log(selectedRole)}
      {console.log(selectedSkillList)}
      <h2>Pilih Role</h2>

      <CNav varant="tabs" role="tablist">
        <CNavItem>
          <CNavLink active={activeKey === 1}>1. Role Utama</CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink active={activeKey === 2}>2. Role Tambahan</CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink active={activeKey === 3}>3. Role Minat</CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="role-utama" visible={activeKey === 1}>
          <h3>Role Utama</h3>
          {tabItem('utama')}
        </CTabPane>

        <CTabPane role="tabpanel" aria-labelledby="role-tambahan" visible={activeKey === 2}>
          <h3>Role Tambahan</h3>
          {tabItem('tambahan')}
        </CTabPane>

        <CTabPane role="tabpanel" aria-labelledby="role-minat" visible={activeKey === 3}>
          <h3>Role Minat</h3>
          {tabItem('minat')}
        </CTabPane>
      </CTabContent>

      <CRow className="mb-3">
        <CCol md={4} className="d-grid mb-2">
          <CButton color="secondary" size="lg" onClick={handleBack}>
            Kembali
          </CButton>
        </CCol>

        <CCol md={8} className="d-grid mb-2">
          <CButton
            color="primary"
            size="lg"
            onClick={handleNext}
            disabled={activeKey === 1 && !selectedRole.utama}
          >
            Selanjutnya
          </CButton>
        </CCol>
      </CRow>
    </>
  )
}

export default PilihRole
