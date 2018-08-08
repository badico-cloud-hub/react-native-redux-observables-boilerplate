import { createReducer } from '../'

const initialState = { text: 'initial text from Redux' };

export default createReducer(initialState, {
  'CHANGE_TEXT': () => ({
    ...state,
    text: action.text
  }),
  'GET_GOOGLE_SUCCESS': (state, action) => ({
    ...state,
    status: action.status
  }),
})
