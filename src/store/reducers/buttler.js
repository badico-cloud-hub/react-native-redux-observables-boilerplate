import * as R from 'ramda'
import { createReducer } from '../'
import {
    OPEN_FORM,
    CLOSE_FORM,
    REQUEST_FULFILLED,
    SHOW_MESSAGE,
} from '../constants'

const initial = {
    forms: {
        list: false,
    },
    message: {},
    // dinamic return from request
    list: [
        //     {
        //     '#account':{
        //         '#key1': 'value1',
        //     },
        //     '011':{
        //         '016': 1.9,
        //     },
        // }
    ],
}

export default createReducer(initial, {
    [OPEN_FORM]: (state, action) => ({
        ...state,
        forms: {
            ...state.forms,
            [action.form]: true,
        }
    }),
    [CLOSE_FORM]: (state, action) => ({
        ...state,
        forms: {
            ...state.forms,
            [action.form]: false,
        },
        message: {
            ...state.forms,
            [action.form]: undefined,
        }
    }),
    [SHOW_MESSAGE]: (state, action) => ({
        ...state,
        message: {
            ...state.message,
            [action.form]: action.message,
        }
    }),
    [REQUEST_FULFILLED]: (state, action) => ({
        ...state,
        [action.on]: [
        ...(R.isNil(state[action.on]) ? [] : state[action.on]),
        {
            url: action.url,
            data: action.data,
        }]
    }),
    
  })