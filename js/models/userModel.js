import { createAction } from '../actions'

export default{
  namespace: 'user',
  state: {
    userInfo: null,
  },
  reducers: {
    getUserInfo(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    * checkUserInfo({ payload }, { call, put }) {
      yield put(createAction('getUserInfo')({ userInfo: payload }))
    },
  },
}