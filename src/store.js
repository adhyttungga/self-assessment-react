import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  formDiri: {
    nama_pekerja: '',
    no_pn: '',
    status: '',
    department: '',
    fungsi: '',
    email: '',
    corporate_title: '',
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
  keywordInfoSkill: '',
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
