import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  formDiri: {
    namaPekerja: '',
    noPN: '',
    status: '',
    department: '',
    fungsi: '',
    email: '',
    corporateTitle: '',
  },
  selectedRole: {
    utama: undefined,
    tambahan: undefined,
    minat: undefined,
  },
  selectedSkillList: [],
  selectedSkill: [],
  activeKey: 1,
  jawabanSA1: [],
  jawabanSA2: [],
  jawabanDUJT: [],
  jawabanKT: [],
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
