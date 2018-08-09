
import Rx from 'rxjs'
import * as R from 'ramda'

import {
    WILL_SAVE_FORM_FIELD,
    SAVE_FORM_FIELD,
    OPEN_FORM,
    REQUEST_FULFILLED,
    // NOT_FINDED_DDD,
    WILL_SEND_FORM,
    POST,
} from '../../store/constants'

import { ofType } from 'redux-observable';
import { filter, tap, ignoreElements } from 'rxjs/operators';
import { fetchData } from '../../utils'

// Caso tenha um valor tal ativa o outro formulario
export const openLeadOnNotFinded = (action$, store) => action$.pipe(
    ofType(WILL_SAVE_FORM_FIELD).map(action => {
        if (action.value === NOT_FINDED_DDD && action.form === 'calculator') {
            log('LEAD!!')
            return ({ type: OPEN_FORM, form: 'lead' })
        }
        return {
            ...action,
            type: SAVE_FORM_FIELD
        }
    })
)


export const sendFormToService = (action$, store) => action$.ofType(WILL_SEND_FORM)
    .debounceTime(500)
    .mergeMap(
        action => {
            const state = store.getState()
            if (action.form === 'calculator') {
                // using the form name we can resolve all api calls,
                const url = '/calculator/fale-mais-list'

                // data needed to send
                const {
                    origin,
                    destination,
                    totalTime,
                } = state.form[action.form]
        
                const priceList = R.pipe(
                    R.path(['buttler', 'prices']),
                    R.last,
                    R.path(['data'])
                )(state)

                const costByMinute = R.path([origin, destination], priceList)

                return Rx.Observable
                    .from(['30', '60', '120'])
                    .map(min => {
                        const dataToSend = {
                            costByMinute,
                            totalTime,
                            origin,
                            destination,
                            plan: `FaleMais${min}`,
                        }
                        return dataToSend
                    })
                    .toArray()
                    .switchMap(requestArray => fetchData(url, POST, requestArray))
                    .map(data => ({
                        type: REQUEST_FULFILLED,
                        on: 'calculator',
                        url,
                        data,
                    }))
            }

            if (action.form === 'lead') {
                // using the form name we can resolve all api calls,
                const url = '/lead/add-demand'

                // data needed to send
                const { fullName, email, demand } = state.form[action.form]

                return fetchData(url, POST, { fullName, email, demand })
                    .map(data => ({
                        type: REQUEST_FULFILLED,
                        on: 'lead',
                        url,
                        data,
                    }))
            }
            
            return {
                type: REQUEST_FULFILLED,
                request: 'untraced api call',
                data: action,
            }
        }
    )