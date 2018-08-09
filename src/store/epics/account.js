import { of, merge, from } from 'rxjs'
import { ofType } from 'redux-observable';
import { filter, mapTo, switchMap, mergeMap, map, flatMap } from 'rxjs/operators';
import { fetchData } from '../../utils'

export const fetchAccounts = (action$, store) => action$.pipe(
    ofType('WILL_LOAD_LIST'),
    switchMap(() => fetchData({
            url: 'https://dev-api.stefanini-spark.com/accounts?pageSize=5'
        }).pipe(
            map(({ response }) => ({
                type: 'REQUEST_FULFILLED',
                on: 'list',
                data: response,
            })),
            //flatMap(from)
        ))
    )

export const openModal = (action$, store) => action$.pipe(
    ofType('WILL_LOAD_LIST'),
    mapTo({
        type: 'OPEN_FORM',
        form: 'list',
    })
)