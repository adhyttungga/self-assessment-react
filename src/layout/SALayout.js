import React from 'react'
import { SAContent, SAHeader } from '../components/index'
import { useSelector, useDispatch } from 'react-redux'

const SALayout = () => {
  const formDiri = useSelector((state) => state.formDiri)
  const selectedRole = useSelector((state) => state.selectedRole)
  const selectedSkillList = useSelector((state) => state.selectedSkillList)
  const selectedSkill = useSelector((state) => state.selectedSkill)
  const dispatch = useDispatch()

  return (
    <div>
      {console.log(localStorage.getItem('formDiri'))}
      <div className="wrapper d-flex flex-column min-vh-100 bg-white">
        <SAHeader />
        {console.log('formDiri: ', formDiri)}
        {console.log('selectedRole: ', selectedRole)}
        {console.log('selectedSkillList: ', selectedSkillList)}
        {console.log('selectedSkill: ', selectedSkill)}
        <div className="body flex-grow-1 px-3">
          <SAContent />
        </div>
      </div>
    </div>
  )
}

export default SALayout
