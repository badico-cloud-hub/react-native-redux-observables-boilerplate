import { createReducer } from '../'

const initialState = {
    location: 'Home'
};

export default createReducer(initialState, {
  'GO_TO': (state, action) => ({
    ...state,
    location: action.location
  }),
  'GET_GOOGLE_SUCCESS': (state, action) => ({
    ...state,
    status: action.status
  }),
})
