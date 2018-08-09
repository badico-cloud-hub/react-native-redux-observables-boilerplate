import { createReducer } from '../'
import { SAVE_FORM_FIELD  } from '../constants'

const initial = {}

export default createReducer(initial, {
    [SAVE_FORM_FIELD]: (state, action) => ({
        ...state,
        [action.form]: {
            ...state[action.form],
            [action.field]: action.value,
        }, 
    }),
  })